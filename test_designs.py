#!/usr/bin/env python3
from playwright.sync_api import sync_playwright
import time

def test_designs():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})

        # Navigate to design showcase
        page.goto('http://localhost:5173/designs')
        page.wait_for_load_state('networkidle')
        time.sleep(1)

        # Take screenshot of Glass Morphism (default)
        page.screenshot(path='/tmp/design_glass.png', full_page=True)
        print("✓ Glass Morphism screenshot saved")

        # Click on Swiss International
        page.locator('button:has-text("Swiss International")').click()
        time.sleep(0.5)
        page.screenshot(path='/tmp/design_swiss.png', full_page=True)
        print("✓ Swiss International screenshot saved")

        # Click on Brutalism
        page.locator('button:has-text("Brutalism")').click()
        time.sleep(0.5)
        page.screenshot(path='/tmp/design_brutalism.png', full_page=True)
        print("✓ Brutalism screenshot saved")

        # Click on Art Deco
        page.locator('button:has-text("Art Deco")').click()
        time.sleep(0.5)
        page.screenshot(path='/tmp/design_artdeco.png', full_page=True)
        print("✓ Art Deco screenshot saved")

        # Click on Organic
        page.locator('button:has-text("Organic")').click()
        time.sleep(0.5)
        page.screenshot(path='/tmp/design_organic.png', full_page=True)
        print("✓ Organic screenshot saved")

        browser.close()
        print("\nAll design variations captured!")

if __name__ == '__main__':
    test_designs()
