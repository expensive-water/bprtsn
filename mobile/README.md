# prtsn. mobile (Expo)

The Expo scaffold mirrors the web app’s core flows for feed, debate, campaigns, and impact tracking.

## Getting started
```bash
npm install --global expo-cli
cd mobile
npm install
npm run start
```

Open the Expo Go app on iOS or Android and scan the QR code. Screens live under `mobile/app/` using Expo Router.

## Feature parity roadmap
- [ ] OAuth with Google / Apple via Expo AuthSession
- [ ] Realtime feed updates via backend `/topics` + `/status`
- [ ] Debate participation with structured timer UI
- [ ] Action Tracker syncing with backend `/actions`
- [ ] Push notifications for campaign milestones and civic events
