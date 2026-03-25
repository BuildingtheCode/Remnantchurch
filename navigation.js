/**
 * REMNANT FIRE EMBASSY - WhatsApp Floating Module
 * This script injects the WhatsApp button into any page it's linked to.
 */

const whatsappSettings = {
    number: "2348000000000", // 👈 Replace with your church's WhatsApp number
    message: "Greetings Remnant Fire Embassy, I am reaching out from the website for...",
    buttonColor: "#25D366",
    pulseColor: "rgba(37, 211, 102, 0.4)"
};

function injectWhatsApp() {
    // 1. Create the Button Element
    const waBtn = document.createElement('a');
    waBtn.id = 'whatsapp-floating-trigger';
    waBtn.href = `https://wa.me/${whatsappSettings.number}?text=${encodeURIComponent(whatsappSettings.message)}`;
    waBtn.target = "_blank";
    waBtn.rel = "noopener noreferrer";
    
    // 2. Add Tailwind-style classes for positioning and look
    waBtn.className = "fixed bottom-8 right-8 z-[999] flex items-center justify-center w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90 group";
    waBtn.style.backgroundColor = whatsappSettings.buttonColor;

    // 3. Add the SVG Icon and "Need Help?" Tooltip
    waBtn.innerHTML = `
        <div class="absolute -top-10 right-0 bg-slate-900 text-white text-[11px] font-bold px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            PRAYER & INQUIRIES
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="white">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412 0 6.556-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.92c1.516.903 3.125 1.387 4.773 1.388 4.909 0 8.903-3.993 8.903-8.903 0-2.379-.927-4.615-2.608-6.295s-3.917-2.607-6.295-2.607c-4.91 0-8.903 3.993-8.903 8.903 0 1.765.516 3.487 1.492 4.98l-.997 3.637 3.738-.983z"/>
        </svg>
    `;

    // 4. Inject Pulse Animation Styles
    const style = document.createElement('style');
    style.innerHTML = `
        #whatsapp-floating-trigger {
            animation: whatsapp-glow 2s infinite;
        }
        @keyframes whatsapp-glow {
            0% { box-shadow: 0 0 0 0 ${whatsappSettings.pulseColor}; }
            70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(waBtn);
}

// Initialize when page is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectWhatsApp);
} else {
    injectWhatsApp();
}