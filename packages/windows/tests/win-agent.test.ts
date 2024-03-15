import { WindowsAgent } from "../src/win-agent";

describe("Windows Device Interaction Tests", function() {

  let windowsAgent: WindowsAgent;

  before(async function() {
    windowsAgent = new WindowsAgent();
  });

  beforeEach(async function() {
    // This runs before each test. Initializing the Appium client here if needed for each test.
  });

  afterEach(async function() {
    // This runs after each test. Clean up resources, like closing the Appium session.
  });

  const pptPresentationQuery = "Help me create a presentation on 'AI in Healthcare' using PowerPoint.";
  it(pptPresentationQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: pptPresentationQuery
    });
  });

  const fitnessPlannerQuery = "I need some help for running a 30-day fitness challenge.";
  it(fitnessPlannerQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: fitnessPlannerQuery
    });
  });

  const musicNightPlannerQuery = "Let's plan a music night for this Saturday.";
  it(musicNightPlannerQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: musicNightPlannerQuery
    });
  });

  const wicklowTripPlannerQuery = "Let's plan a trip to Cork for this weekend.";
  it(wicklowTripPlannerQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: wicklowTripPlannerQuery
    });
  });

  const findLatestMGKQuery = "I'd like to listen the latest MGK single called 'don't let me go' on Spotify.";
  it(findLatestMGKQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: findLatestMGKQuery
    });
  });

  const sendMessageWhatsappQuery = "Send a message to friend on Instagram telling her 'Bella Ciao'";
  it(sendMessageWhatsappQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: sendMessageWhatsappQuery
    });
  });

  const turnOffLocationServiceQuery = "Turn off location services in iOS Settings.";
  it(turnOffLocationServiceQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: turnOffLocationServiceQuery
    });
  });

  const youtubeQuery = "Check the latest news on AI from 'Matt Wolfe' on YouTube.";
  it(youtubeQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: youtubeQuery
    });
  });

  const twitterQuery = "Check the latest news on AI from 'Matt Wolfe' on Twitter.";
  it(twitterQuery, async function() {
    const results = await windowsAgent.runAsync({
      query: twitterQuery
    });
  });

  after(async function() {
    // Cleanup code for the entire test suite, if any.
  });
});