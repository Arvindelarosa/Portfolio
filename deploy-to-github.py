#!/usr/bin/env python3
"""
GitHub Deployment Script for Portfolio
Pushes Arvin's portfolio to GitHub without Git CLI
"""

import os
import json
import base64
import requests
from pathlib import Path

# Configuration
GITHUB_USERNAME = "Arvindelarosa"
REPO_NAME = "Portfolio"
ACCESS_TOKEN = None  # Will be prompted
PROJECT_DIR = r"C:\myportfolio"

# Files to ignore
IGNORE_PATTERNS = {
    '.next',
    'node_modules',
    '.git',
    '.env',
    '.env.local',
    'deploy-to-github.js',
    'deploy-to-github.py',
    '.DS_Store',
    '*.pyc',
}

def get_github_token():
    """Get GitHub personal access token from user"""
    print("\n🔐 GitHub Authentication Required")
    print("=" * 50)
    print("\nTo deploy, you need a GitHub Personal Access Token:")
    print("1. Go to: https://github.com/settings/tokens")
    print("2. Click 'Generate new token (classic)'")
    print("3. Select 'repo' scope")
    print("4. Copy the token")
    print("\n" + "=" * 50)
    
    token = input("\n📍 Paste your GitHub token here: ").strip()
    if not token:
        print("❌ No token provided. Cannot continue.")
        return None
    return token

def get_files_to_upload():
    """Get list of files to upload, excluding ignored patterns"""
    files = {}
    
    for root, dirs, filenames in os.walk(PROJECT_DIR):
        # Remove ignored directories from traversal
        dirs[:] = [d for d in dirs if d not in IGNORE_PATTERNS and not d.startswith('.')]
        
        for filename in filenames:
            # Skip ignored files
            if filename in IGNORE_PATTERNS or filename.startswith('.'):
                continue
            
            full_path = os.path.join(root, filename)
            rel_path = os.path.relpath(full_path, PROJECT_DIR)
            
            # Read file content
            try:
                with open(full_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                files[rel_path.replace('\\', '/')] = content
            except:
                # Binary file, skip
                continue
    
    return files

def upload_to_github(token, files):
    """Upload files to GitHub repository"""
    api_url = f"https://api.github.com/repos/{GITHUB_USERNAME}/{REPO_NAME}/contents"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    
    print(f"\n📤 Uploading {len(files)} files to GitHub...")
    print("=" * 50)
    
    successful = 0
    failed = 0
    
    for file_path, content in files.items():
        url = f"{api_url}/{file_path}"
        
        # Encode content
        content_encoded = base64.b64encode(content.encode('utf-8')).decode('utf-8')
        
        data = {
            "message": f"Add {file_path}",
            "content": content_encoded
        }
        
        try:
            response = requests.put(url, json=data, headers=headers)
            
            if response.status_code in (201, 200):
                print(f"✅ {file_path}")
                successful += 1
            else:
                print(f"⚠️  {file_path} (Status: {response.status_code})")
                if response.status_code == 422:
                    print(f"   → File may already exist")
                failed += 1
                
        except Exception as e:
            print(f"❌ {file_path}: {str(e)}")
            failed += 1
    
    print("=" * 50)
    print(f"\n📊 Upload Summary:")
    print(f"   ✅ Successful: {successful}")
    print(f"   ⚠️  Failed: {failed}")
    
    return successful > 0

def main():
    """Main deployment function"""
    print("\n" + "=" * 50)
    print("🚀 PORTFOLIO GITHUB DEPLOYMENT")
    print("=" * 50)
    
    print(f"\n📍 Project: {PROJECT_DIR}")
    print(f"📍 Repository: github.com/{GITHUB_USERNAME}/{REPO_NAME}")
    
    # Get GitHub token
    token = get_github_token()
    if not token:
        return False
    
    # Get files to upload
    print(f"\n📁 Scanning project files...")
    files = get_files_to_upload()
    
    if not files:
        print("❌ No files found to upload!")
        return False
    
    print(f"✅ Found {len(files)} files ready to upload")
    
    # Upload files
    success = upload_to_github(token, files)
    
    if success:
        print("\n" + "=" * 50)
        print("✨ SUCCESS! Portfolio uploaded to GitHub!")
        print("=" * 50)
        print(f"\n📍 Repository: https://github.com/{GITHUB_USERNAME}/{REPO_NAME}")
        print(f"\n🚀 Next Steps:")
        print(f"   1. Visit: https://vercel.com/new")
        print(f"   2. Select your GitHub repository")
        print(f"   3. Click 'Deploy'")
        print(f"   4. Your portfolio goes LIVE! 🎉")
        return True
    else:
        print("\n❌ Upload failed. Please try again.")
        return False

if __name__ == "__main__":
    try:
        success = main()
        exit(0 if success else 1)
    except KeyboardInterrupt:
        print("\n\n❌ Deployment cancelled by user.")
        exit(1)
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        exit(1)
