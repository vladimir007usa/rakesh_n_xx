import json
import os
import sys

def generate_project_structure(name, description, tech_stack, github_url=None, live_url=None, image=None):
    """
    Generates a standardized JSON structure for a portfolio project.
    """
    return {
        "id": name.lower().replace(" ", "-"),
        "title": name,
        "description": description,
        "technologies": tech_stack,
        "links": {
            "github": github_url,
            "live": live_url
        },
        "image": image or f"/projects/{name.lower().replace(' ', '_')}.webp"
    }

def save_projects(projects, output_file="projects_data.json"):
    """
    Saves the list of projects to a JSON file.
    """
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(projects, f, indent=4)
        print(f"Successfully saved {len(projects)} projects to {output_file}")
    except Exception as e:
        print(f"Error saving projects: {e}")

def main():
    print("Project Data Manager for Portfolio")
    
    # Example usage: Generating placeholder data
    projects = [
        generate_project_structure(
            "Portfolio Website",
            "A modern, responsive portfolio built with React and Vite.",
            ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
            github_url="https://github.com/vladimir007usa/portfolio",
            image="/projects/portfolio.webp"
        ),
        generate_project_structure(
            "E-commerce Dashboard",
            "A comprehensive admin panel for managing online stores.",
            ["Next.js", "Trpc", "Prisma", "PostgreSQL"],
            github_url="https://github.com/vladimir007usa/shop-dash",
            image="/projects/shop_dash.webp"
        )
    ]
    
    output_path = sys.argv[1] if len(sys.argv) > 1 else "projects_data.json"
    save_projects(projects, output_path)

if __name__ == "__main__":
    main()
