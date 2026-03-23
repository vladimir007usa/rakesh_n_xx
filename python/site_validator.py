import os
import re
import sys
from html.parser import HTMLParser

class PortolioHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.images = []
        self.h1_count = 0
        self.meta_desc = False
        self.has_title = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        if tag == 'a' and 'href' in attrs_dict:
            self.links.append(attrs_dict['href'])
        elif tag == 'img' and 'src' in attrs_dict:
            self.images.append(attrs_dict['src'])
        elif tag == 'h1':
            self.h1_count += 1
        elif tag == 'meta' and attrs_dict.get('name') == 'description':
            self.meta_desc = True
        elif tag == 'title':
            self.has_title = True

def validate_site(directory):
    """
    Validates HTML files for broken links, image references, and basic SEO.
    """
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    print(f"Validating site in: {directory}")
    html_files = []
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.html'):
                html_files.append(os.path.join(root, file))

    if not html_files:
        print("No HTML files found to validate.")
        return

    for file_path in html_files:
        print(f"\nChecking: {file_path}")
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        parser = PortolioHTMLParser()
        parser.feed(content)

        # SEO Checks
        if not parser.has_title:
            print("[SEO] MISSING: <title> tag.")
        if not parser.meta_desc:
            print("[SEO] MISSING: <meta name='description'> tag.")
        if parser.h1_count == 0:
            print("[SEO] WARNING: No <h1> tag found.")
        elif parser.h1_count > 1:
            print(f"[SEO] WARNING: Multiple <h1> tags found ({parser.h1_count}).")
        else:
            print("[SEO] OK: <h1> tag present.")

        # Link Checks (Basic)
        print(f"Found {len(parser.links)} links.")
        for link in parser.links:
            if link.startswith('http') or link.startswith('#') or link.startswith('mailto:'):
                continue
            # Logic to check local links could be added here

        # Image Checks
        print(f"Found {len(parser.images)} images.")
        # Logic to check if images exist in the public directory could be added here

def main():
    target_dir = sys.argv[1] if len(sys.argv) > 1 else ".."
    validate_site(target_dir)

if __name__ == "__main__":
    main()
