from playwright.sync_api import sync_playwright
import os

output_dir = '/tmp/site-screenshots'
os.makedirs(output_dir, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 900})

    # Screenshot home page
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{output_dir}/home.png', full_page=True)
    print("Home page screenshot saved")

    # Screenshot blog page
    page.goto('http://localhost:5173/blog')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{output_dir}/blog.png', full_page=True)
    print("Blog page screenshot saved")

    # Screenshot a blog post
    page.goto('http://localhost:5173/blog/building-with-ai-tools')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{output_dir}/post.png', full_page=True)
    print("Blog post screenshot saved")

    # Mobile view of home page
    page.set_viewport_size({'width': 390, 'height': 844})
    page.goto('http://localhost:5173')
    page.wait_for_load_state('networkidle')
    page.screenshot(path=f'{output_dir}/home-mobile.png', full_page=True)
    print("Mobile home page screenshot saved")

    browser.close()
    print(f"\nAll screenshots saved to {output_dir}")
