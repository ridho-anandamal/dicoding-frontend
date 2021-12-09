const skipContainer = document.getElementById("skipContainer");

class SkipToContent {
    // Show button Content to Skip
    static appear() {
        skipContainer.style.setProperty('transition', "margin-left 0.5s ease-out");
        // skipContainer.style.setProperty('margin-left', "200px");
    }

    // Show button Content to Skip until 10 second and disappear
    static waitingtoDisappear() {
        setTimeout(() => this.clicked(), 10000);
    }

    // disappear button Content to Skip if clicked
    static clicked() {
        skipContainer.style.setProperty('display', 'none');
    }
}

export default SkipToContent;