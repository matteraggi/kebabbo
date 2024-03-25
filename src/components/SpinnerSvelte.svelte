
<script>
    export let type = "large"; // Could be 'large' or 'small'
  </script>

<img src="./kebab_spinner.svg" class="kebab-spinner {type+'-spinner'}" alt="Spinning Kebab">


<style>
.kebab-spinner { /* Assuming your SVG is inline or the class for your img tag */
    animation: spin 1.5s linear infinite;
    transform-origin: center center;
    align-items: center;
    justify-content: center;
}
.large-spinner {
    height: 100px;    
    width: 100px;
    margin-top: 250px;
}
.small-spinner {
    height: 50px;    
    width: 50px;
    position: absolute;
    left: 150px;
    top: 150px;
    z-index: 2; /* Ensure the image is on top */
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

</style>
