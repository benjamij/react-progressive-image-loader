# react-progressive-image-loader
A sample progressive image loader. Loads a low resolution image, and subsitutes it for the high-resolution counterpart once it has been downloaded.


Usage:
```
ProgressiveImageLoader
    size="200px 200px"
    lowResSrc="https://i.imgur.com/joUA0Yn.jpg"
    src="https://i.imgur.com/DPeujbw.jpg"  
/>
```

If `size` is not set, `100% 100%` will be used as the default dimensions.
