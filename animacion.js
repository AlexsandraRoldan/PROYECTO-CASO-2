document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));

    const translations = {
        "The Ultimate AI Customer Service Companion": "El servicio de atención al cliente definitivo con IA",
        "Embrace AI chatbot technology in a GPT-4-supported communication tool to help your customers, empower your team, and reduce your workload.": "Aprovecha la tecnología de chatbots con IA en una herramienta respaldada por GPT-4 para ayudar a tus clientes, potenciar a tu equipo y reducir tu carga de trabajo.",
        "Watch Tutorial ▶": "Ver Tutorial ▶",
        "AI-driven customer service": "Servicio de atención al cliente impulsado por IA",
        "Book a demo": "Reserva una demo",
        "Login": "Iniciar sesión",
        "Solutions": "Soluciones",
        "Pricing": "Precios",
        "Resources": "Recursos",
        "Book a Call": "Reservar una llamada",
        "Big companies use Rotar AI for": "Grandes empresas usan Rotar AI para",
        "Chatbot for Marketing": "Chatbot para Marketing",
        "Chatbot for HR": "Chatbot para Recursos Humanos",
        "Chatbot for Sales": "Chatbot para Ventas",
        "Provide recommendations and process transactions in a chat.": "Proporciona recomendaciones y procesa transacciones en un chat.",
        "Find talent and interact with candidates in an innovative way.": "Encuentra talento e interactúa con candidatos de manera innovadora.",
        "Automate responses and increase conversions for your business.": "Automatiza respuestas y aumenta conversiones para tu negocio.",
        "Great! Happy to help find the right plan for you 😊.": "¡Genial! Feliz de ayudar a encontrar el plan adecuado para ti 😊.",
        "Get more customers on my website page": "Conseguir más clientes en mi página web",
        "Start automating my sales now": "Comenzar a automatizar mis ventas ahora",
        "What are you looking to do with Rotar AI?": "¿Qué buscas hacer con Rotar AI?",
        "You have qualified for the next round of interviews, Alvarez! Please let me know your availability ✨": "¡Has calificado para la siguiente ronda de entrevistas, Álvarez! Por favor, dime tu disponibilidad ✨",
        "Take control of your productivity": "Toma el control de tu productividad",
        "Transform your Customer Service with Rotar’s AI and": "Transforma tu servicio al cliente con la IA de Rotar y",
        "Throughout your customer’s entire buying journey, Rotar AI allows you to delight them at every step of the way, from their first visit to the final purchase.": "A lo largo de todo el recorrido de compra de tu cliente, Rotar AI te permite deleitarlo en cada paso del camino, desde su primera visita hasta la compra final.",
        "Real-Time Live Chat.": "Chat en vivo en tiempo real.",
        "Try template for free →": "Probar plantilla gratis →",
        "Privacy Policy": "Política de privacidad",
        "Terms of Use": "Términos de uso",
        "Contact Us 📞": "Contáctanos 📞",
        "🌍 Cambiar a Español": "🌍 Change to English",
        "Our AI-powered chatbots and automation tools are here to help.": "Nuestros chatbots con IA y herramientas de automatización están aquí para ayudar.",
        "Easily respond to chats from all": "Responde fácilmente a chats de todos",
        "Generate and qualify prospects automatically. Transfer": "Genera y califica prospectos automáticamente. Transfiere",
        "Gain valuable insights from your audience": "Obtén información valiosa de tu audiencia",
        "Enhance Communication with": "Mejora la comunicación con",
        "Lead customers to a sale through recommended": "Guía a los clientes hacia una venta a través de recomendaciones",
        "Redefining": "Redefiniendo",
        "Customer Service": "Servicio al Cliente",
        "Boost conversations 96% with AI": "Aumenta conversaciones en un 96% con IA",
        "Online": "En línea",
        "Education": "Educación",
        "Health Care": "Salud",
        "Tourism": "Turismo",
        "Financial": "Finanzas",
        "E-Commerce": "Comercio Electrónico",
        "Legal": "Legal",
        "HR": "Recursos Humanos",
        "EMPLOYEE": "EMPLEADO",
        "Company": "Empresa",
        "Service": "Servicio",
        "Services": "Servicios",
        "Conversations": "Conversaciones",
        "Statistics provide valuable insights into how customers interact with Rotar AI.": "Las estadísticas proporcionan información valiosa sobre cómo interactúan los clientes con Rotar AI.",
        "James Kokolomel": "James Kokolomel",
        "Mbida Messi": "Mbida Messi",
        "Founder ERC Music Market Store": "Fundador de ERC Music Market Store",
        "No worries, we've all been in a melancholy situation like that. To reset your password, go to the login page and click on Forgot Password? Then, enter the email address and follow it.": "No te preocupes, todos hemos estado en una situación melancólica así. Para restablecer tu contraseña, ve a la página de inicio de sesión y haz clic en ¿Olvidaste tu contraseña? Luego, ingresa la dirección de correo electrónico y sigue las instrucciones.",
        "Join the growing number of businesses and companies that have experienced the transformative impact of our chatbot services.": "Únete al creciente número de empresas y compañías que han experimentado el impacto transformador de nuestros servicios de chatbot.",
        "We are at the forefront of AI chatbot development, revolutionizing the way businesses engage with their customers.": "Estamos a la vanguardia del desarrollo de chatbots de IA, revolucionando la forma en que las empresas interactúan con sus clientes.",
        "GPT-4 Powered Chatbot Solution. Try it free now.": "Solución de chatbot impulsada por GPT-4. Pruébala gratis ahora.",
        "Always accessible": "Siempre accesible"
    };
    
    function translateTextNodes(node) {
        if (node.nodeType === 3) { // Si es un nodo de texto
            const text = node.nodeValue.trim();
            if (translations[text]) {
                node.nodeValue = translations[text];
            }
        } else {
            node.childNodes.forEach(translateTextNodes);
        }
    }

    function translatePage() {
        document.body.childNodes.forEach(translateTextNodes);
    }

    const translateBtn = document.getElementById("translate-btn");
    if (translateBtn) {
        translateBtn.addEventListener("click", translatePage);
    }
});
