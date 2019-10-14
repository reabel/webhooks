title: Webhooks Presentation
author:
    name: Ryan Reabel
    twitter: reabel
    url: http://reabelx.com
output: presentation.html
controls: true
theme: sudodoki/reveal-cleaver-theme
--

<!-- WIP, based off MySql presentation -->

# Webhooks
## AKA Web Callback or HTTP Push API
<!-- test comment-->

--

# Regular API Calls vs Webhooks

* Webhooks are more of a style than a specification
* Think REST vs SOAP

--

### Api Calls

* Wait for a response typically
* response is usually formatted in some manner, following a defined spec
* processed data is sent in the response to the initial call

--

### Webhooks

* Typically triggered by an call, posted to a defined url
* Any processed data would be sent via a separate call typically
* Common Terms:
  * Event
  * Listener / Consumer
  * Payload

--

## Live Demo / Code Comparison (Node)

--

# Use Cases / Examples

--

### Discord / Slack integrations

--

### Paypal

* Used by Paypal for event notification

--

### Travis CI / Github

--

### Others

--

### Resources

* [ELI5](https://dev.to/_bigblind/comment/11oo) of webhooks
* presentation created in [cleaver](https://www.npmjs.com/package/cleaver)
* [???](https://dev.to/oktadev/webhooks-vs-serverless-1end)
* [Paypal's](https://developer.paypal.com/docs/integration/direct/webhooks/#overview) description of their webhooks
* [Github's](https://developer.github.com/webhooks/) setup of Webhook consumers
* [Travis-CI's](https://docs.travis-ci.com/user/notifications/#configuring-webhook-notifications) configuration for notifications

--