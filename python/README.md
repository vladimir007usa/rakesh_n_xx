# Portfolio Python Utilities

This directory contains Python scripts for managing and optimizing the portfolio project.

## Scripts

### 1. `image_optimizer.py`
A script that scans the project for image files (`.jpg`, `.png`, etc.) and converts them to the modern `.webp` format with optimization. This ensures that the website remains fast and lightweight.

**Usage:**
```bash
python image_optimizer.py [directory_path]
```
*   `directory_path`: Port to the directory containing images (defaults to `../public`).

### 2. `project_manager.py`
A utility for managing project data structures. It can be used to generate placeholder data or fetch updates for the portfolio projects.

**Usage:**
```bash
python project_manager.py [output_file.json]
```

### 3. `site_validator.py`
A tool for validating HTML files for broken links, image references, and basic SEO. This ensures that the portfolio remains professional and accessible.

**Usage:**
```bash
python site_validator.py [directory_path]
```
*   `directory_path`: Port to the directory containing HTML files (defaults to `..`).

## Setup

Ensure you have Python installed and the required dependencies:

```bash
pip install -r requirements.txt
```

---
*Developed by vladimir007usa*
