// Device Detection and Download Logic
(function () {
    // Detect user's platform
    function detectPlatform() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // iOS detection
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            return 'ios';
        }

        // Android detection
        if (/android/i.test(userAgent)) {
            return 'android';
        }

        // Default to Android for desktop/other
        return 'android';
    }

    // Update UI based on detected platform
    function updateDownloadUI() {
        const platform = detectPlatform();
        const deviceNameEl = document.getElementById('device-name');
        const primaryBtn = document.getElementById('primary-download');
        const androidLink = document.getElementById('android-link');
        const iosLink = document.getElementById('ios-link');

        if (platform === 'ios') {
            deviceNameEl.textContent = 'iOS';
            primaryBtn.querySelector('.btn-icon').textContent = '🍎';
            androidLink.classList.remove('active');
            iosLink.classList.add('active');
            iosLink.classList.remove('disabled');
        } else {
            deviceNameEl.textContent = 'Android';
            primaryBtn.querySelector('.btn-icon').textContent = '📱';
            androidLink.classList.add('active');
            iosLink.classList.remove('active');
        }

        // Store detected platform
        return platform;
    }

    // Handle download button click
    function handleDownload(platform) {
        if (platform === 'android') {
            // Direct APK download
            const link = document.createElement('a');
            link.href = 'ONE.apk';
            link.download = 'ONE.apk';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show installation instructions
            setTimeout(() => {
                alert('Download started!\n\nAfter download:\n1. Open the APK file\n2. Allow "Install from unknown sources" if prompted\n3. Tap Install\n\nNote: You may need to enable installation from this source in your Android settings.');
            }, 500);
        } else {
            alert('iOS version coming soon!\n\nCurrently only Android is supported.');
        }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function () {
        const platform = updateDownloadUI();

        // Primary download button
        document.getElementById('primary-download').addEventListener('click', function () {
            handleDownload(platform);
        });

        // Platform-specific links
        document.getElementById('android-link').addEventListener('click', function (e) {
            e.preventDefault();
            handleDownload('android');
        });

        document.getElementById('ios-link').addEventListener('click', function (e) {
            e.preventDefault();
            if (!this.classList.contains('disabled')) {
                handleDownload('ios');
            }
        });

        // Add smooth scroll for any future anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements when DOM is ready
    window.addEventListener('load', function () {
        document.querySelectorAll('.feature, .philosophy').forEach(el => {
            observer.observe(el);
        });
    });
})();
