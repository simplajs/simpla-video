# API reference

## Properties

Property      | Type      | Default             | Description                                                   
------------- | --------- | ------------------- | -----------                     
`path`        | `String`  | `undefined`         | Path to the data for the video on Simpla's API                              
`src`         | `String`  | `''`                | Source URL of the video to embed
`placeholder` | `String`  | `'placeholder.svg'` | Placeholder to show when video is editable and has no content 
`editable`    | `Boolean` | `false`             | Whether the video is editable   
`readonly`    | `Boolean` | `false`             | Whether the video is able to become editable                                                               
`active`      | `Boolean` | `false`             | Whether the video is currently being edited                   
`loaded`      | `Boolean` | `false`             | Whether the video src has been loaded from Simpla

Properties can be set either directly with JavaScript or as attributes on the element

```html
<simpla-video path="/video" placeholder="pink">

<script>
  document.querySelector('simpla-video').editable = true;
</script>
```

## Schema

**Type:** `'Video'`

Data  | Type      | Description                                           
----- | --------- | -----------                                           
`src` | `String`  | YouTube or Vimeo URL of the of the video to embed

```json
{
  "path": "/video/path",
  "type": "Video",
  "data": {
    "src": "https://vimeo.com/55073825",
  },
  "createdAt": "2017-04-16T09:58:56.276Z",
  "updatedAt": "2017-05-09T09:25:36.835Z"
}
```

## Events

Event              | Properties       | Description                                    
------------------ | ---------------- | -----------                                    
`src-changed`      | `value{String}`  | Fired when `src` property changes      
`editable-changed` | `value{Boolean}` | Fired when `editable` property changes 
`active-changed`   | `value{Boolean}` | Fired when `active` property changes   
`loaded-changed`   | `value{Boolean}` | Fired when `loaded` property changes   