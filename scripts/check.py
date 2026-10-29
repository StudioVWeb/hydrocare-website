#!/usr/bin/env python3
"""Check local static routes/assets; --baseline verifies the original transfer bytes."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
import sys, json, hashlib
ROOT=Path(__file__).resolve().parents[1]
DIST=ROOT/'dist'
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.ids=set(); self.h1=0; self.robots=False; self.description=False; self.title=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if tag=='h1':self.h1+=1
        if tag=='title':self.title=True
        if tag=='meta' and a.get('name')=='robots':self.robots='noindex' in a.get('content','')
        if tag=='meta' and a.get('name')=='description':self.description=bool(a.get('content'))
        for name in ('href','src'):
            if name in a:self.links.append(a[name])
        if 'srcset' in a:
            self.links.extend(x.strip().split()[0] for x in a['srcset'].split(',') if x.strip())
def main():
    issues=[]; pages={}
    for path in DIST.rglob('*.html'):
        page=Page();page.feed(path.read_text(encoding='utf-8'));pages[path.resolve()]=page
    for path,page in pages.items():
        rel=str(path.relative_to(ROOT))
        if page.h1!=1:issues.append(rel+': expected one h1')
        if not page.robots:issues.append(rel+': preview noindex missing')
        if not(page.title and page.description):issues.append(rel+': title/description missing')
        for raw in page.links:
            u=urlsplit(raw)
            if u.scheme or u.netloc:continue
            target=(DIST/unquote(u.path).lstrip('/')) if u.path.startswith('/') else path.parent/unquote(u.path) if u.path else path
            if target.is_dir():target=target/'index.html'
            target=target.resolve()
            if not target.is_relative_to(DIST.resolve()) or not target.is_file():issues.append(rel+': broken reference '+raw)
            elif u.fragment and target in pages and unquote(u.fragment) not in pages[target].ids:issues.append(rel+': broken fragment '+raw)
    import re
    css=(DIST/'style.css').read_text(encoding='utf-8')
    for raw in re.findall(r'url\(([^)]+)\)',css):
        raw=raw.strip('\'"')
        if raw.startswith('/') and not (DIST/raw.lstrip('/')).is_file():issues.append('dist/style.css: broken url() '+raw)
    count=0
    if '--baseline' in sys.argv:
        provenance=json.loads((ROOT/'SOURCE_PROVENANCE.json').read_text())
        records=[{'path':x['exported_path'],'sha256':x['sha256']} for x in provenance['source_files']]+provenance['supplemental_original_upload_files']
        for record in records:
            f=ROOT/record['path'];count+=1
            if not f.is_file() or hashlib.sha256(f.read_bytes()).hexdigest()!=record['sha256']:issues.append('Baseline mismatch: '+record['path'])
    for issue in issues:print('FAIL:',issue)
    print(json.dumps({'html_pages':len(pages),'baseline_files_checked':count,'issues':len(issues)},ensure_ascii=False))
    return bool(issues)
if __name__=='__main__':sys.exit(main())
