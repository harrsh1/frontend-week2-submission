document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeicon.src = 'open-eye.png';
        
    } else {
        passwordField.type = 'password';
        eyeicon.src = 'close-eye.png';
       
    }
    eyeIcon.style.width = '28px';
    eyeIcon.style.height = '28px';
    setTimeout(() => {
        eyeIcon.style.width = '24px';
        eyeIcon.style.height = '24px';
    }, 200); 
});


const blurContainer = document.querySelector('.blur-main-container');

    if (blurContainer) {
        blurContainer.style.transition = 'backdrop-filter 0.5s ease-in-out'; 
        blurContainer.addEventListener('mouseover', () => {
            blurContainer.style.backdropFilter = 'blur(50px)'; 
        });
        blurContainer.addEventListener('mouseout', () => {
            blurContainer.style.backdropFilter = 'blur(25px)';
        });
    }

    const blurnavbar = document.querySelector('.nav-bar');
    if (blurnavbar) {
        blurnavbar.style.transition = 'backdrop-filter 0.5s ease-in-out'; 
        blurnavbar.addEventListener('mouseover', () => {
            blurnavbar.style.backdropFilter = 'blur(50px)'; 
        });
        blurnavbar.addEventListener('mouseout', () => {
            blurnavbar.style.backdropFilter = 'blur(25px)';
        });
    }    

   


    const mockUsers = [
        { username: 'admin', password: 'adminpass' }, 
        { username: 'cashier', password: 'cashier123' },
    ];
    
    document.getElementById('loginButton').addEventListener('click', (event) => {
        event.preventDefault();
    
        const username = document.getElementById('Username').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.querySelector('.errorMessage');
    
        if (errorMessage) {
            errorMessage.textContent = '';
        }
    
        const user = mockUsers.find(
            (u) => u.username === username && u.password === password
        );
    
        if (user) {
            alert('Login successful!');
            console.log('User logged in:', user);
    
            if (username === 'admin') {
               
                window.location.href = 'admin.html';
            } 
            if(username=== 'cashier'){
                window.location.href = 'cashier.html'
            }
           
        } else {
            if (errorMessage) {
                errorMessage.textContent = 'Invalid username or password.';
            }
        }
    });

