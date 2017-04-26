# Simpla Video
![Version][bower-badge] [![Build status][travis-badge]][travis-url] ![Size][size-badge] [![Published][webcomponents-badge]][webcomponents-url] [![Simpla slack group][slack-badge]][slack-url]

Simpla-video is an editable video embed built on the Simpla content system. It lets you directly embed responsive videos from services like Youtube and Vimeo on your page.

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="simpla-video.html">

    <script src="https://unpkg.com/simpla@2.0.0"></script>
    <script>
      Simpla.init('local');
      Simpla.editable(true);
    </script>

    <style>
      simpla-video {
        max-width: 38rem;
        margin: 0 auto
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<simpla-video path="/video"></simpla-video>
```

## Installation and setup

Install simpla-video with Bower (Yarn support coming soon)

```sh
$ bower install simpla-video --save
```

Then include the Simpla library and setup a project (read more about [setting up Simpla](https://www.simpla.io/docs/guides/get-started))

```html
<script src="https://unpkg.com/simpla@^2.0.0"></script>
<script>
  // TODO: replace 'project-id' with your project ID
  Simpla.init('project-id')
</script>
```

Import simpla-video into the `<head>` of your document

```html
<link rel="import" href="/bower_components/simpla-video/simpla-video.html">
```

And then use it on your page wherever you want to embed a video. Simpla-video currently supports Youtube and Vimeo URLs.

```html
<simpla-video path="/video"></simpla-video>
```

### Polyfills for cross-browser support

`simpla-video` relies on emerging standards, for full cross-browser support make sure you include the [Web Components Lite](https://github.com/webcomponents/webcomponentsjs) polyfill.

```html
<script src="https://unpkg.com/webcomponents.js@^0.7.24/webcomponents-lite.min.js" async></script>
```

## Editing content

Edit the src of a simpla-video by entering edit mode with Simpla (which makes all Simpla elements on a page editable) or setting the `editable` property directly on the element.

```js
// Enter edit mode
Simpla.editable(true);
```

```html
<!-- Make only this video editable -->
<simpla-video path="/video" editable></simpla-video>
```

Entering edit mode with Simpla is the recommended way to edit video embeds. It ensures all elements on a page remain in sync and updates Simpla's public `'editable'` state, which other elements may rely on.

> If you include the [simpla-admin](https://webcomponents.org/element/SimplaElements/simpla-admin) component on your page, you can also enter edit mode by adding #edit to the end of your URL

## Saving content

Save a `simpla-video` by calling Simpla's `save` method, which will save all modified content on the page. It returns a promise.

```js
// Save all modified Simpla content
Simpla.save();
```

Note you must be authenticated before saving content - either login with `simpla-admin` or the `Simpla.login()` method.

> If you have included the [simpla-admin](http://webcomponents.org/element/SimplaElements/simpla-admin) component on your site, you can save content by entering edit mode and just pressing the 'save' button.

## Responsive videos

Simpla-video is fully responsive, you can give it any valid CSS `width` (including percentages) and it will behave as expected. **However** sizing by `height` is currently not supported.

## Deferred loading

You can defer the loading of a video until the user clicks on it with the `defer` property

```html
<simpla-video path="/video" defer></simpla-video>
```

If a simpla-video has `defer` set, it will display a full-size thumbnail of the embedded video rather than the video itself. Then when a user clicks on the thumbnail the video will be loaded in dynamically.

## Initializing with static content

You can set the `src` of simpla-video directly, using a URL from either Vimeo or Youtube. If data for the video's `path` exists on Simpla's API, the locally set `src` will be overwritten

```html
<simpla-video src="https://vimeo.com/55073825" path="/video">
```

Initializing with static content is useful for bootstrapping a project with predefined content. By setting `src` and then calling `Simpla.save()` you can easily set content directly to Simpla.

**Note:** Since `src` is always overwritten by remote data, you should not have `src` set in production, because if a newer video source gets saved you will experience FOUC (Flash Of Unformatted Content) when the old one is overwritten

## Custom placeholders

You can set custom placeholders (displayed when simpla-video is editable and does not have a video src set) the same way as native elements, with a `placeholder` attribute

```html
<simpla-video path="/video" placeholder="url(https://i.vimeocdn.com/video/499134794_1280x720.jpg)">
```

`placeholder` takes any valid CSS `background` value (colors, `url()`, etc). The placeholder does not impact the video's default size or aspect ratio.

## API reference

### Properties

Property      | Type    | Default           | Description                                                   
------------- | ------- | ----------------- | -----------                                                   
`src`         | String  | ''                | Source URL of the video to embed
`path`        | String  | `undefined`       | Path to the data for the video on Simpla's API
`placeholder` | String  | `placeholder.svg` | Placeholder to show when video is editable and has no content 
`editable`    | Boolean | `false`           | Whether the image is editable                                 
`active`      | Boolean | `false`           | Whether the image is currently being edited                   

Properties can be set either directly with JavaScript or as attributes on the element

```html
<simpla-video path="/video" placeholder="pink">

<script>
  document.querySelector('simpla-video').editable = true;
</script>
```

### Events

Event              | Description                                    
------------------ | -----------                                    
`src-changed`      | Fired whenever the `src` property changes      
`editable-changed` | Fired whenever the `editable` property changes 
`active-changed`   | Fired whenever the `active` property changes   

## Contributing

If you find any issues with simpla-video please report them! If you'd like to see a new feature in supported file an issue or let us know in Simpla's public [Slack group](https://slack.simpla.io). We also happily accept PRs. 

---

MIT © Simpla <friends@simpla.io>

[bower-badge]: https://img.shields.io/bower/v/simpla-video.svg
[bowerlicense-badge]: https://img.shields.io/bower/l/simpla-video.svg
[travis-badge]: https://img.shields.io/travis/SimplaElements/simpla-video.svg
[travis-url]: https://travis-ci.org/SimplaElements/simpla-video
[bowerdeps-badge]: https://img.shields.io/gemnasium/SimplaElements/simpla-video.svg
[bowerdeps-url]: https://gemnasium.com/bower/simpla-video
[size-badge]: https://badges.herokuapp.com/size/github/SimplaElements/simpla-video/master/simpla-video.html?gzip=true&color=blue
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/SimplaElements/simpla-video
[slack-badge]: http://slack.simpla.io/badge.svg
[slack-url]: https://slack.simpla.io

