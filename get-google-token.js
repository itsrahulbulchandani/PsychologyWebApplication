const { google } = require('googleapis');
const readline = require('readline');

console.log('\n🔐 Google Calendar Token Generator');
console.log('=====================================\n');

// Get credentials from user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('First, get your OAuth credentials from Google Cloud Console:');
console.log('1. Go to: https://console.cloud.google.com/');
console.log('2. Select your project (or create one)');
console.log('3. Go to "APIs & Services" → "Credentials"');
console.log('4. Create "OAuth 2.0 Client ID" if you haven\'t\n');

rl.question('Enter your Google Client ID: ', (clientId) => {
  rl.question('Enter your Google Client Secret: ', (clientSecret) => {
    
    const REDIRECT_URI = 'http://localhost:3000/api/auth/google/callback';
    
    const oauth2Client = new google.auth.OAuth2(
      clientId,
      clientSecret,
      REDIRECT_URI
    );

    const SCOPES = ['https://www.googleapis.com/auth/calendar'];

    // Generate auth URL
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
      prompt: 'consent'
    });

    console.log('\n✨ Step 1: Open this URL in your browser:\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(authUrl);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    
    console.log('📝 Step 2: Sign in with the Google account you want to use for bookings');
    console.log('📝 Step 3: Click "Allow" to grant calendar access');
    console.log('📝 Step 4: You\'ll be redirected to a page with a code\n');

    rl.question('Enter the authorization code from that page: ', async (code) => {
      try {
        const { tokens } = await oauth2Client.getToken(code);
        
        console.log('\n✅ SUCCESS! Here are your credentials:\n');
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        console.log('\n📋 Copy these to your .env.local file:\n');
        console.log('GOOGLE_CLIENT_ID=' + clientId);
        console.log('GOOGLE_CLIENT_SECRET=' + clientSecret);
        console.log('GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback');
        console.log('GOOGLE_REFRESH_TOKEN=' + tokens.refresh_token);
        console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
        console.log('🎉 All done! Restart your dev server to use Google Calendar.\n');
        
      } catch (error) {
        console.error('\n❌ Error getting tokens:', error.message);
        console.log('\nTroubleshooting:');
        console.log('1. Make sure you entered the correct code');
        console.log('2. Try running the script again');
        console.log('3. Check that your redirect URI matches in Google Console\n');
      }
      
      rl.close();
    });
  });
});

