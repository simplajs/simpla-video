# Simpla Video
[![Build status][travis-badge]][travis-url] ![Size][size-badge] ![Version][bower-badge] [![Published][webcomponents-badge]][webcomponents-url]

Simpla-video is an editable video element. It lets you directly embed responsive videos from services like Youtube and Vimeo on your page, and defer loading them until user interaction. It's built on the [Simpla][simpla] content system.

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

### Contents

- [Installation and setup](#installation-and-setup)
- [Editing content](#editing-content)
- [Saving content](#saving-content)
- [Responsive videos](#responsive-videos)
- [Deferred loading](#deferred-loading)
- [Initializing with static content](#initializing-with-static-content)
- [Custom placeholders](#custom-placeholders)
- [Readonly](#readonly)
- [Contributing](#contributing)

### Resources

- [API reference][api]
- [Demo][demo]
- [License][license]

## Installation and setup

Install simpla-video with Bower (Yarn support coming soon)

```sh
$ bower i simpla-video --save
```

[Setup Simpla][simpla-setup] on your page, then import simpla-video into your `<head>`

```html
<link rel="import" href="/bower_components/simpla-video/simpla-video.html">
```

Use `<simpla-video>` wherever you want to embed a video. Give each video a unique `path`, where it will store its content in your project

```html
<simpla-video path="/video"></simpla-video>
```

## Editing content

Edit a simpla-video by entering edit mode with Simpla (which makes all Simpla elements on a page editable) or setting the `editable` property directly on the element.

```js
// Enter edit mode
Simpla.editable(true);
```

```html
<!-- Make only this video editable -->
<simpla-video path="/video" editable></simpla-video>
```

Entering edit mode with Simpla is the recommended way to edit video embeds. It ensures all elements on a page remain in sync and updates Simpla's public `editable` state, which other elements may rely on.

## Saving content

Save a simpla-video by calling Simpla's `save()` method, which will save all modified content on the page. It returns a promise.

```js
// Save all modified Simpla content
Simpla.save();
```

> You must be authenticated with Simpla before saving content

## Responsive videos

Simpla-video is fully responsive, you can give it any valid CSS `width` (including percentages) and it will behave as expected. **However** sizing by `height` is currently not supported.

## Deferred loading

Defer the loading of a video until the user clicks on it with the `defer` property

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

> Since static content is overwritten by remote data, you should not have `src` set in production. If a newer video gets saved you will experience FOUC (Flash Of Unformatted Content) when the old one is overwritten 

## Custom placeholders

You can set custom placeholders (displayed when simpla-video is editable and does not have a video src set) with a `placeholder` attribute

```html
<simpla-video path="/video" placeholder="url(https://i.vimeocdn.com/video/499134794_1280x720.jpg)">
```

`placeholder` takes any valid CSS `background` value (colors, `url()`, etc). The placeholder does not impact the video's default size or aspect ratio.

## Readonly

Simpla-video has a `readonly` property that stops it from becoming editable, even if Simpla is in edit mode or you try to set `editable` on the element directly. This is useful for using simpla-video to purely consume and display content from Simpla's API.

```html
<simpla-video path="/video" readonly>
```

## Contributing

If you find any issues with simpla-video please report them! If you'd like to see a new feature in supported file an issue. We also happily accept PRs. 

***

MIT © [Simpla][simpla]

[simpla]: https://www.simpla.io
[simpla-setup]: https://docs.simpla.io/guides/get-started.htlm

[api]: https://www.webcomponents.org/element/simplaio/simpla-videw/page/API.md
[demo]: https://www.webcomponents.org/element/simplaio/simpla-video/demo/demo/index.html
[license]: https://github.com/simplaio/simpla-video/blob/master/LICENSE

[bower-badge]: https://img.shields.io/bower/v/simpla-video.svg
[travis-badge]: https://img.shields.io/travis/simplaio/simpla-video.svg
[travis-url]: https://travis-ci.org/simplaio/simpla-video
[size-badge]: http://img.badgesize.io/simplaio/simpla-video/master/simpla-video.html?compression=gzip&label=render_bundle_%28gzip%29
[webcomponents-badge]: https://img.shields.io/badge/webcomponents.org-published-blue.svg
[webcomponents-url]: https://www.webcomponents.org/element/simplaio/simpla-video
