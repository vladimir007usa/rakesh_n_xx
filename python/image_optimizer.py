import os
from PIL import Image
import sys

def optimize_images(directory, quality=85):
    """
    Scans the directory for image files and converts them to WebP format with optimization.
    """
    supported_formats = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff')
    count = 0
    
    if not os.path.exists(directory):
        print(f"Directory {directory} does not exist.")
        return

    print(f"Scanning directory: {directory}")
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(supported_formats):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # Prepare the new filename
                        file_name_no_ext = os.path.splitext(file)[0]
                        webp_path = os.path.join(root, f"{file_name_no_ext}.webp")
                        
                        # Convert and save as WebP
                        img.save(webp_path, 'WEBP', quality=quality, optimize=True)
                        print(f"Optimized: {file} -> {file_name_no_ext}.webp")
                        count += 1
                except Exception as e:
                    print(f"Error processing {file}: {e}")

    print(f"Successfully optimized {count} images.")

if __name__ == "__main__":
    # Default to the public directory if not specified
    target_dir = sys.argv[1] if len(sys.argv) > 1 else "../public"
    optimize_images(target_dir)
