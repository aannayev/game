<template>
  <section class="welcome">
    <h1>Privacy Policy</h1>
    <p>
      This Privacy Policy for Gold Rush has been compiled to better serve those
      who are concerned with how their 'Personally Identifiable Information'
      (PII) is being used online. PII, as described in privacy law and
      information security, is information that can be used on its own or with
      other information to identify, contact, or locate a single person, or to
      identify an individual in context. Please read Privacy Policy Gold Rush
      carefully to get a clear understanding of how we collect, use, protect or
      otherwise handle your Personally Identifiable Information. What personal
      information do we collect from the people that visit Gold Rush? When
      ordering or registering on our app, as appropriate, you may be asked to
      enter your phone number or other details to help you with your experience.
      When do we collect information? We collect information from you when you
      are installing the application. Data you provide us. Contact information
      (such as name and email address) Player name Your messages to the Service
      (such as chat logs and player support tickets) Other data you choose to
      give us (such as data to identify a lost account) Data we collect
      automatically. Data about your account and game progress Your IP address
      and mobile device identifiers (such as your device ID, advertising ID, MAC
      address, IMEI) Data about your device, such as device name and operating
      system, browser type and language Data we collect with cookie and similar
      technology (see more below) General location data Precise geolocation data
      (GPS, with your consent) Data about your use of the Service, such as
      gameplay data and your interactions with other players inside the Service
      In most cases, we also create a specific ID for you when you use the
      Service How do we use your information? We may use the information we
      collect from you when you register, sign up for our newsletter, respond to
      a survey or marketing communication, surf the website, or use certain
      other site features in the following ways: to quickly process your
      requests. How do we protect your information? We do not use vulnerability
      scanning and/or scanning to PCI standards. We only provide articles and
      information. Not only that, but we never ask for credit card numbers.
      Likewise, we do not use Malware Scanning. We do not use an SSL
      certificate. Furthermore, we do not need an SSL because: it is android
      application Do we use 'cookies'? Like most online services, our partners,
      and we use cookie and similar technology to provide and personalize the
      Service, analyze use, target advertisements and prevent fraud. You can
      choose to have your computer warn you each time a cookie is being sent, or
      you can choose to turn off all cookies. You do this through your browser
      settings. Since the browser is a little different, look at your browser's
      Help Menu to learn the correct way to modify your cookies. If you turn
      cookies off, Some of the features that make your site experience more
      efficient may not function properly. That make your site experience more
      efficient and may not function properly. Third-party disclosure We do not
      sell, trade, or otherwise transfer to outside parties your Personally
      Identifiable Information. Google Google's advertising requirements can be
      summed up by Google's Advertising Principles. They are put in place to
      provide a positive experience for users.
      https://support.google.com/adwordspolicy/answer/1316548?hl=en We have not
      enabled Google AdSense on our app, but we may do so in the future. How
      does our site handle Do Not Track signals? We honor Do Not Track signals
      and Do Not Track, plant cookies, or use advertising when a Do Not Track
      (DNT) browser mechanism is in place. Fair Information Practices The Fair
      Information Practices Principles form the backbone of privacy law in the
      United States, and the concepts they include have played a significant
      role in the development of data protection laws around the globe.
      Understanding the Fair Information Practice Principles and how they should
      be implemented is critical to comply with the various privacy laws that
      protect personal information.
    </p>
    <router-link to="/game-select">
      <div class="welcome__button">
        <button>
          <p>Accept</p>
        </button>
      </div>
    </router-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.welcome {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  position: relative;
  &__button {
    position: fixed;
    bottom: 30px;
    right: 100px;

    button {
      position: relative;
      cursor: pointer;
      font-size: 20px;
      font-weight: 700;
      padding: 11px 27px;
      width: 140px;
      height: 50px;

      border: 1px solid #00a3ff;
      box-shadow: 0px 4px 4px rgba(36, 255, 0, 0.27),
        inset 0px -6px 4px rgba(0, 163, 255, 0.26),
        inset 0px 4px 4px rgba(255, 247, 207, 0.65);
      border-radius: 11px;
      background: linear-gradient(
        180deg,
        #70ff00 0%,
        #bd00ff 0.01%,
        #005484 100%
      );
      &::before {
        content: "";
        position: absolute;
        border-radius: 11px;
        z-index: 1;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          #70ff00 0%,
          #bd00ff 0.01%,
          #005484 100%
        );
      }

      p {
        position: absolute;
        z-index: 4;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 3;
        z-index: 10;
        font-size: 18px;
        line-height: 43.91px;
        background: -webkit-linear-gradient(276deg, #ffffff 0%, #1dc9ff 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;

        font-size: 24px;
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        text-transform: uppercase;
        margin: 0;
      }
    }
  }
}
h1 {
  font-size: 36px;
  line-height: 43.91px;
  background: -webkit-linear-gradient(#ebff00, #ffa800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
p {
  color: #fff;
  font-family: "Impact";
  font-weight: 400;
  font-size: 24px;
  line-height: 26px;
  width: 70%;
}
</style>
