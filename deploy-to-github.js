const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = 'C:\\myportfolio';

try {
  console.log('🚀 Starting GitHub deployment...\n');
  
  // Change to project directory
  process.chdir(projectDir);
  console.log('✅ Working directory:', projectDir);

  // Step 1: Initialize git
  console.log('\n📍 Step 1: Initializing Git...');
  try {
    execSync('git init', { stdio: 'inherit' });
    console.log('✅ Git initialized');
  } catch (e) {
    console.log('⚠️ Git init completed (may already exist)');
  }

  // Step 2: Configure git user
  console.log('\n📍 Step 2: Configuring Git user...');
  execSync('git config user.email "arvin@example.com"', { stdio: 'inherit' });
  execSync('git config user.name "Arvin M. Dela Rosa"', { stdio: 'inherit' });
  console.log('✅ Git user configured');

  // Step 3: Add remote
  console.log('\n📍 Step 3: Adding GitHub remote...');
  try {
    execSync('git remote add origin https://github.com/Arvindelarosa/Portfolio.git', { stdio: 'inherit' });
    console.log('✅ Remote added');
  } catch (e) {
    console.log('⚠️ Remote may already exist, updating...');
    execSync('git remote set-url origin https://github.com/Arvindelarosa/Portfolio.git', { stdio: 'inherit' });
  }

  // Step 4: Create .gitignore
  console.log('\n📍 Step 4: Creating .gitignore...');
  const gitignore = `
node_modules/
.next/
.env.local
.env*.local
.vercel
.DS_Store
*.swp
*.swo
*~
.git/
`;
  fs.writeFileSync('.gitignore', gitignore.trim());
  console.log('✅ .gitignore created');

  // Step 5: Add all files
  console.log('\n📍 Step 5: Adding files to Git...');
  execSync('git add .', { stdio: 'inherit' });
  console.log('✅ Files added');

  // Step 6: Commit
  console.log('\n📍 Step 6: Creating commit...');
  execSync('git commit -m "Initial portfolio commit - Arvin M. Dela Rosa Portfolio"', { stdio: 'inherit' });
  console.log('✅ Commit created');

  // Step 7: Set branch to main
  console.log('\n📍 Step 7: Setting branch to main...');
  try {
    execSync('git branch -M main', { stdio: 'inherit' });
    console.log('✅ Branch set to main');
  } catch (e) {
    console.log('✅ Branch already main');
  }

  // Step 8: Push to GitHub
  console.log('\n📍 Step 8: Pushing to GitHub...');
  console.log('⚠️  This requires authentication!');
  console.log('📍 You will be asked to authenticate with GitHub');
  console.log('💡 Tip: Use GitHub Personal Access Token instead of password\n');
  
  execSync('git push -u origin main', { stdio: 'inherit' });
  console.log('✅ Code pushed to GitHub!');

  console.log('\n🎉 SUCCESS! Your portfolio is now on GitHub!');
  console.log('\n📍 Repository: https://github.com/Arvindelarosa/Portfolio');
  console.log('\n✨ Next: Deploy to Vercel from your GitHub repository!');
  console.log('   1. Go to https://vercel.com/new');
  console.log('   2. Select your GitHub repository');
  console.log('   3. Click Deploy');
  console.log('   4. Get your live URL in 2 minutes! 🚀');

} catch (error) {
  console.error('\n❌ Error during deployment:', error.message);
  console.error('\n⚠️  Make sure:');
  console.error('   • Git is installed');
  console.error('   • You are connected to internet');
  console.error('   • GitHub credentials are available');
  process.exit(1);
}
