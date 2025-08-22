// Set the anniversary date
const anniversaryDate = new Date('February 23, 2026 00:00:00').getTime();

// Update countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown with animation
    updateTimeWithAnimation('days', days);
    updateTimeWithAnimation('hours', hours);
    updateTimeWithAnimation('minutes', minutes);
    updateTimeWithAnimation('seconds', seconds);

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector('.countdown-container').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h2 style="font-family: 'Dancing Script', cursive; font-size: 3rem; color: white; margin-bottom: 20px;">🎉 Happy Anniversary! 🎉</h2>
                <p style="font-size: 1.5rem; color: rgba(255,255,255,0.9); margin-bottom: 30px;">Today marks another beautiful year of our love story!</p>
                <div style="font-size: 4rem; margin: 20px 0; animation: celebration 2s infinite;">💕❤️💕</div>
            </div>
        `;
        
        // Add celebration animation
        const celebrationStyle = document.createElement('style');
        celebrationStyle.textContent = `
            @keyframes celebration {
                0%, 100% { transform: scale(1) rotate(0deg); }
                25% { transform: scale(1.1) rotate(5deg); }
                75% { transform: scale(1.1) rotate(-5deg); }
            }
        `;
        document.head.appendChild(celebrationStyle);
    }
}, 1000);

function updateTimeWithAnimation(elementId, newValue) {
    const element = document.getElementById(elementId);
    if (element && element.textContent != newValue) {
        element.style.transform = 'scale(1.2)';
        element.style.color = '#f8b500';
        element.textContent = newValue;
        
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.color = 'white';
        }, 300);
    } else if (element) {
        element.textContent = newValue;
    }
}

// Enhanced interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click effects to time cards
    const timeCards = document.querySelectorAll('.time-card');
    timeCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95) translateY(-5px)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.05)';
            }, 150);
        });
    });

    // Add hover effects to photos
    const photos = document.querySelectorAll('.couple-photo, .memory-img, .gallery-item img');
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            createHeartBurst(event.clientX, event.clientY);
        });
    });

    // Add romantic interactions to promise cards
    const promiseCards = document.querySelectorAll('.promise-card');
    promiseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            createFloatingHearts(this);
        });
    });

    // Add click effects to reason items
    const reasonItems = document.querySelectorAll('.reason-item');
    reasonItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.background = 'rgba(255, 182, 193, 0.4)';
            setTimeout(() => {
                this.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 1000);
        });
    });

    // Add dream item interactions
    const dreamItems = document.querySelectorAll('.dream-item');
    dreamItems.forEach(item => {
        item.addEventListener('click', function() {
            const icon = this.querySelector('.dream-icon');
            icon.style.transform = 'scale(1.5) rotate(360deg)';
            setTimeout(() => {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }, 600);
        });
    });

    // Add floating animation to celebration card
    const celebrationCard = document.querySelector('.celebration-card');
    if (celebrationCard) {
        celebrationCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        celebrationCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }

    // Add parallax effect to floating hearts
    document.addEventListener('mousemove', function(e) {
        const hearts = document.querySelectorAll('.heart-float');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.5;
            heart.style.transform += ` translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});

// Create heart burst effect
function createHeartBurst(x, y) {
    const hearts = ['💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = `heartBurst${i} 1s ease-out forwards`;
        
        document.body.appendChild(heart);
        
        // Create unique animation for each heart
        const angle = (i * 60) * Math.PI / 180;
        const distance = 100;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes heartBurst${i} {
                0% {
                    opacity: 1;
                    transform: translate(0, 0) scale(0.5);
                }
                50% {
                    opacity: 1;
                    transform: translate(${endX/2}px, ${endY/2}px) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translate(${endX}px, ${endY}px) scale(0.2);
                }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            heart.remove();
            style.remove();
        }, 1000);
    }
}

// Enhanced sparkle effects
function createSparkle() {
    const sparkles = ['✨', '⭐', '🌟', '💫', '⚡'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = Math.random() * 15 + 15 + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkleEnhanced 3s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Add enhanced sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleEnhanced {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        20% {
            opacity: 1;
            transform: scale(1) rotate(90deg);
        }
        80% {
            opacity: 1;
            transform: scale(1) rotate(270deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Create sparkles periodically
setInterval(createSparkle, 2000);

// Create floating hearts for promise cards
function createFloatingHearts(element) {
    const hearts = ['💕', '💖', '💗', '💝', '💘'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.position = 'fixed';
        heart.style.left = rect.left + Math.random() * rect.width + 'px';
        heart.style.top = rect.top + rect.height + 'px';
        heart.style.fontSize = '16px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = `floatUp${i} 2s ease-out forwards`;
        
        document.body.appendChild(heart);
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp${i} {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(0.5);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-100px) scale(1);
                }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            heart.remove();
            style.remove();
        }, 2000);
    }
}

// Add romantic background music trigger (optional)
function playLoveSound() {
    // This would play a romantic sound if audio file is added
    console.log('💕 Love sound played!');
}

// Add typing effect to love letter
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Enhanced romantic interactions
setInterval(() => {
    if (Math.random() < 0.3) {
        createSparkle();
    }
}, 1500);

