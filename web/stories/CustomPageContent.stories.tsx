import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomPageContent from '../components/CustomPageContent';

export default {
  title: 'owncast/Custom page content',
  component: CustomPageContent,
  parameters: {},
} as ComponentMeta<typeof CustomPageContent>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof CustomPageContent> = args => <CustomPageContent {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  content: `"\u003cp\u003eOwncast TV is a 24/7 live stream run by the Owncast project as an example of the software in use. Learn more about how you can have your own live stream that you completely control at \u003ca href=\"https://owncast.online\"\u003eowncast.online\u003c/a\u003e.\u003c/p\u003e\n\u003cp\u003eThis example instance shows how you can customize the page by changing things like fonts and colors as well as how you can add custom action buttons such as a donation button.\u003c/p\u003e\n\u003cp\u003eStay tuned in to learn about Owncast, hear from some streamers about their experiences using it, some bits and pieces of Owncast promo material, and highlights from other projects that are pretty cool.\u003c/p\u003e\n\u003cp\u003eBut when you've seen what we have to share with you, do yourself a favor and visit the \u003ca href=\"https://directory.owncast.online\"\u003eOwncast Directory\u003c/a\u003e and find an awesome stream to check out!\u003c/p\u003e\n\u003chr\u003e\n\u003ch2\u003eLinks to content seen in this stream\u003c/h2\u003e\n\u003cul\u003e\n\u003cli\u003e\u003ca href=\"https://owncast.online/quickstart/\"\u003eOwncast Install Quickstart\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://directory.owncast.online\"\u003eOwncast Directory\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://creativecommons.org\"\u003eCreative Commons\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://tilvids.com\"\u003eTILVids\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://studio.blender.org/\"\u003eBlender Studio\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://archive.org/details/computerchronicles\"\u003eComputer Chronicles\u003c/a\u003e\u003c/li\u003e\n\u003cli\u003e\u003ca href=\"https://joinmastodon.org\"\u003eMastodon\u003c/a\u003e\u003c/li\u003e\n\u003c/ul\u003e",`,
};

export const Example2 = Template.bind({});
Example2.args = {
  content: `"<h1>WHAT IS HAPPENING HERE</h1>\n<p>Game That Tune Radio is live with fantastic video game music streaming around the clock! We've got music from NES, SNES, Sega Genesis, Nintendo 64, Playstation, PC, and more coming all the time! If it's been featured on our podcast, it's gonna be on this stream! We only play three songs from each game on our podcast, and we decided that everyone needs more tunes!</p>\n<p>We'll be updating this livestream with new games as they're played on the show, including your requests! To get priority in requesting games for the show, check out <a href=\"https://www.patreon.com/GameThatTune\">https://www.patreon.com/GameThatTune</a></p>\n<p>Be sure to check out our live recordings of the Game That Tune podcast! We broadcast every Wednesday night at 9 PM EST on our YouTube channel as well as <a href=\"https://www.twitch.tv/GameThatTune\">https://www.twitch.tv/GameThatTune</a> and <a href=\"https://www.facebook.com/GameThatTune\">https://www.facebook.com/GameThatTune</a>\nTune in and join in on the fun! Find the podcast in iTunes every Wednesday morning or head to <a href=\"https://www.gamethattune.com\">https://www.gamethattune.com</a>!</p>\n<p>Visit <a href=\"https://www.patreon.com/GameThatTune\">https://www.patreon.com/GameThatTune</a> to help us keep up this live stream and upgrade our equipment for the live show! We've got exclusive mixtapes for our patrons, and lots more stuff planned for the future, so consider helping us out!</p>\n<h1>HOW IT WORKS</h1>\n<p>Featuring music from over 1000 games! Check out <a href=\"https://music.gamethattune.com/songs\">https://music.gamethattune.com/songs</a> for the full list and make a request from your favorite game!</p>\n<p>Now that you've seen the list of games, make a request in the chat!</p>\n<p><code>!sr</code> + anything = general search<br>\n<code>!gr</code> + game title = random song from matching game<br>\n<code>!cr</code> + composer name = random song from matching composer<br>\n<code>!tr</code> + anything = random result only searching song titles<br>\n<code>!rr</code> + anything = random result from all searchable fields<br>\n<code>!game gtt</code> = starts a round of our guessing game for bonus points!</p>\n<p>We have gifs!</p>\n<p>Wanna see your favorite gif on screen? type <code>!summon</code> followed by the gif name! Want your favorite gif to take over the video? Type <code>!spawn</code> followed by the gif name!</p>\n<p>Still have questions? Ask the chatbot! type <code>!info</code> to...wait for it...get more info!</p>\n<p>Thanks for listening!</p>"`,
};

export const Example3 = Template.bind({});
Example3.args = {
  content: `<hr>\n<h3>The upcoming streams</h3>\n<h4>Thursday, Apr. 28:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Thursday Dragons:</strong> „<a href=\"https://www.gog.com/game/dragon_age_origins\">Dragon Age: Origins UE</a>“ (english)</li>\n</ul>\n<h4>Friday, Apr. 29:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Trucker Hat:</strong> „<a href=\"https://eurotrucksimulator2.com\">Euro Truck Simulator 2</a>“ (english)</li>\n</ul>\n<h4>Saturday, Apr. 30:</h4>\n<ul>\n<li>19:00 CEST / 17:00 UTC / 1:00 pm EDT<br>\n<strong>Immer Samstags:</strong> „<a href=\"https://www.gog.com/game/syberia_2\">Syberia II</a>“ (deutsch)</li>\n<li>23:30 CEST / 21:30 UTC / 5:30 pm EDT<br>\n<strong>Night Walk:</strong> „<a href=\"https://itch.io/jam/linux-game-jam-2022\">Linux Game Jam 2022</a>“ (english)</li>\n</ul>\n<h4>Sunday, May 1:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Spacy Sunday:</strong> „<a href=\"https://www.ea.com/games/mass-effect/mass-effect-legendary-edition\">Mass Effect 2 LE</a>“ (english)</li>\n</ul>\n<h4>Monday, May 2:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Monday Tactics:</strong> „<a href=\"https://harebrained-schemes.com/battletech/\">BATTLETECH</a>“ (english)</li>\n</ul>\n<h4>Tuesday, May 3:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Epic Tuesday:</strong> „<a href=\"https://terraformers-game.com\">Terraformers</a>“ (english)</li>\n</ul>\n<h4>Wednesday, May 4:</h4>\n<ul>\n<li>22:00 CEST / 20:00 UTC / 4:00 pm EDT<br>\n<strong>Narrative Wednesday:</strong> „<a href=\"https://zidandzniw.pl\">Zniw Adventure</a>“ (english)</li>\n</ul>\n<p>​<br>\n<em>I plan a duration of about 4 to 5 hours per stream.</em></p>\n<p><strong>The VODs</strong> of my streams will be available on <a href=\"https://youtube.com/hatniX\">YouTube channel</a> and on my <a href=\"https://diode.zone/c/hatvods\">hatVODs PeerTube channel</a> (the last 14 days). Some additional videos can also be found on my <a href=\"https://tube.tchncs.de/c/hatube\">haTube PeerTube channel</a>.</p>\n<p>If this channel is offline you might want to checkout other great Owncast streams at the <a href=\"https://directory.owncast.online/\">Owncast Directory</a>.</p>\n<hr>\n<h3>Pro-tips for new viewers</h3>\n<h4>Change chat name</h4>\n<p>When you visit an Owncast channel for the first time then you've been given a random chat name. You see this name on the top right above the chat box. Click on that name in order to pick your own preferred chat name.</p>\n<h4>Chat formatting</h4>\n<p>The chat supports some basic Markdown, like <code>*Italic*</code>, <code>**Bold**</code> and <code>\`Code blocks\`</code> (from the <a href=\"https://owncast.online/docs/website/#chat\">Owncast docs</a>)</p>\n<h4>Player shortcuts</h4>\n<p>The web video player has some keyboard shortcuts for you to use:</p>\n<ul>\n<li>Play/Pause - Spacebar</li>\n<li>Volume up - 0</li>\n<li>Volume down - 9</li>\n<li>Mute - m</li>\n<li>Toggle fullscreen - f</li>\n<li>Toggle chat - c</li>\n</ul>\n<p>(from the <a href=\"https://owncast.online/docs/website/#player\">Owncast docs</a>)</p>\n<h4>Watch Owncast via IPTV</h4>\n<p>If you have a tv platform/set top box (apple, amazon, roku) that you can install IPTV apps on then you can add the url <a href=\"https://directory.owncast.online/api/iptv\">https://directory.owncast.online/api/iptv</a> to watch this and other Owncast channels on the big screen.</p>\n<h4>Watch the stream in a media player</h4>\n<p>The stream is using HLS standard, so you can use your favorite media player to watch the stream using the url <a href=\"https://live.hatnix.net/hls/stream.m3u8\">https://live.hatnix.net/hls/stream.m3u8</a></p>\n<h4>Joining chat-only</h4>\n<p>In case you want to join only the chat (because you're watching via IPTV?) you can do that using this url: <a href=\"https://live.hatnix.net/embed/chat/readwrite\">https://live.hatnix.net/embed/chat/readwrite</a></p>\n<hr>\n<h3>About me and this channel</h3>\n<p>My name is hatniX (or Frank), 48 years old. I'm a PC gamer for over 30 years now, playing games on Linux since 1998. And this is what you'll see here on this channel, me playing games on Linux. Preferable with a focus on storytelling and atmosphere, rather than &quot;pro-gaming&quot;.</p>\n<h4>Fediverse</h4>\n<p>You can follow this server in the Fediverse: <code>@hatnix@live.hatnix.net</code>, in order to get announcements when the stream starts.</p>\n<h4>Owncast</h4>\n<p>This server is powered by <a href=\"https://owncast.online/\">Owncast</a>. Check out the Owncast-Browser-Extension <a href=\"https://addons.mozilla.org/en-US/firefox/addon/owncast-extension/\">for Firefox</a> or <a href=\"https://chrome.google.com/webstore/detail/owncast-extension/djgneammmklaajinkihpibdpaflehgio\">for Chrome browsers</a> to see whether I'm live. Another great way to see when I (or other Owncast streamers) go online, is to follow the Owncast bots on <a href=\"https://botsin.space/@owncast\">Mastodon</a> or <a href=\"https://twitter.com/owncastlive\">Twitter</a>.</p>\n<h4>Chat bot</h4>\n<p>I'm using an experimantal chat bot here, which I have written specifically for Owncast. Use <code>!help</code> in chat to get a list of the available commands. The source code of the bot is available at <a href=\"https://github.com/hatniX/hatbot\">github.com/hatniX/hatbot</a> (Public Domain).</p>\n<p>In case you wonder how I display the chat onscreen, incl. the fade effect, check out <a href=\"https://raw.githubusercontent.com/hatniX/Owncast-tweaks/main/Owncast_onscreen_chat_fade.css\">my CSS file</a>.</p>\n<h4>Music</h4>\n<p>The music here, if not part of the game I'm playing, is provided by <a href=\"https://www.jamendo.com/start\">Jamando</a>. I've got a <a href=\"https://licensing.jamendo.com/en/livestream/gaming\">license for livestream music for gaming</a>.</p>\n<hr>\n<h3>How you can support me</h3>\n<p>If you want to support me, visit my streams, either lurk or be active in chat. You can also help me getting more attention, by telling others about my channel, or just boosting my stream announcements on <a href=\"https://social.tchncs.de/@hatnix\">Mastodon</a> or retweeting them on <a href=\"https://twitter.com/hatniKS\">Twitter</a>.</p>\n<h4>Liberapay</h4>\n<p>Liberapay is a non-profit subscription platform, which means that they don't take a share. If you like, you can <a href=\"https://liberapay.com/hatnix\">support me</a> there, either with a one-time or a regular donation. Thank you so much!</p>\n<h4>Ko-fi</h4>\n<p>In case you want to buy me a coffee then you can do so at <a href=\"https://ko-fi.com/hatnix\">ko-fi</a>. I appreciate that a lot!</p>\n<p>Support is never required, but always much appreciated. Thank you very much! &lt;3</p>\n<hr>\n<h3>My tech specs</h3>\n<h4>PC Hardware:</h4>\n<ul>\n<li><strong>CPU:</strong> AMD Ryzen 9 5900X</li>\n<li><strong>RAM:</strong> 32 GB</li>\n<li><strong>GPU:</strong> AMD Radeon RX 6900 XT (16 GB)</li>\n<li><strong>Keyboard:</strong> Logitech K295</li>\n<li><strong>Trackball:</strong> Kensington Expert Mouse Trackball</li>\n<li><strong>Mouse 1:</strong> Logitech M220</li>\n<li><strong>Mouse 2:</strong> Razer Naga Left Handed Edition</li>\n<li><strong>Microphone:</strong> Blue Yeti</li>\n<li><strong>Earbuds:</strong> Linklike Classic 2</li>\n<li><strong>Headphone:</strong> beyerdynamic DT 990 Pro</li>\n<li><strong>Webcam(s):</strong> Vitade 960A Pro</li>\n</ul>\n<h4>PC Software:</h4>\n<ul>\n<li><strong>OS:</strong> Manjaro Linux</li>\n<li><strong>Kernel:</strong> 5.17.1-3-MANJARO x86_64</li>\n<li><strong>Desktop:</strong> Xfce 4.16.0</li>\n<li><strong>Mesa:</strong> 21.3.8</li>\n<li><strong>Broadcaster software:</strong> OBS Studio 27.2.4</li>\n</ul>\n<h4>Stream Server: <a href=\"https://www.hetzner.com/cloud\">Hetzner Cloud</a> „CPX11“</h4>\n<ul>\n<li>2 vCPU AMD</li>\n<li>2 GB RAM</li>\n<li>40 GB disc</li>\n<li>20TB Traffic</li>\n<li><a href=\"https://owncast.online/\">Owncast</a> v0.0.11<br>\n​</li>\n</ul>`,
};
