document.addEventListener('DOMContentLoaded', function () {
    // === Data: 20-Step Quiz ===
    const questions = [
        // 1. Age (Images from Inlead source)
        {
            question: "Qual a sua <span style='color: var(--primary);'>idade</span>?",
            category: "age",
            options: [
                { text: "18-29 anos", image: "https://cloudfront.inlead.cloud/uploads/13/18-08-2024/md-3fvj7-orza9ejzxlpxnjgs4k6m.webp" },
                { text: "30-39 anos", image: "https://cloudfront.inlead.cloud/uploads/13/18-08-2024/md-3xz74-coz5x0stiysej7mdffmz.webp" },
                { text: "40-49 anos", image: "https://cloudfront.inlead.cloud/uploads/13/18-08-2024/md-ys4iu-drljzwwxj9nzz0zhiqyb.webp" },
                { text: "50+ anos", image: "https://cloudfront.inlead.cloud/uploads/13/18-08-2024/md-bpkdq-fwwg06glxotv7mzybh9b.webp" }
            ]
        },
        // 2. Body Type (Modified with Images as requested)
        {
            question: "Qual formato de corpo <span style='color: var(--primary);'>mais se parece</span> com o seu?",
            category: "body_type",
            options: [
                { text: "Pêra (Quadril mais largo)", image: "./images/body_pear.svg" },
                { text: "Maçã (Peso na barriga)", image: "./images/body_apple.svg" },
                { text: "Ampulheta (Proporcional)", image: "./images/body_hourglass.svg" },
                { text: "Retângulo (Mais reto)", image: "./images/body_rectangle.svg" }
            ]
        },
        // 3. Current Weight Goal (Updated with Source HTML Images)
        {
            question: "Como você descreveria o <span style='color: var(--primary);'>seu corpo</span> hoje?",
            category: "weight_perception",
            options: [
                { text: "Magro", image: "https://cloudfront.inlead.cloud/uploads/367/31-08-2024/md-0fqxy-dfh3d8vkcxi2scdctchr-jwean5.png" },
                { text: "Médio", image: "https://cloudfront.inlead.cloud/uploads/367/31-08-2024/md-0fqxy-dfh3d8vkcxi2scdctchr-jwean5.png" },
                { text: "Inchado", image: "https://cloudfront.inlead.cloud/uploads/367/31-08-2024/md-coprb-qu4t4934hg6z9mx78jae-kpcs9h.png" },
                { text: "Acima do peso", image: "https://cloudfront.inlead.cloud/uploads/367/31-08-2024/md-coprb-qu4t4934hg6z9mx78jae-kpcs9h.png" }
            ]
        },
        // Social Proof 1
        {
            type: "interstitial",
            category: "social_proof_1",
            title: "Resultados Impactantes!",
            text: "Veja como a persistência transforma vidas. Você é a próxima!",
            image: "images/results/transform_1.jpg",
            testimonial: "\"Em apenas 3 semanas eu já sentia minhas roupas folgadas. O método realmente funciona!\""
        },
        // 4. Target Zone
        {
            question: "Qual área você quer <span style='color: var(--primary);'>transformar primeiro</span>?",
            category: "target_zone",
            options: [
                { text: "Barriga e Cintura", icon: "fa-solid fa-fire" },
                { text: "Glúteos e Coxas", icon: "fa-solid fa-bolt" },
                { text: "Braços e Costas", icon: "fa-solid fa-dumbbell" },
                { text: "Corpo inteiro", icon: "fa-solid fa-child" }
            ]
        },
        // 5. Activity Level
        {
            question: "Nível de <span style='color: var(--primary);'>atividade física</span> hoje:",
            category: "activity_level",
            options: [
                { text: "Sedentária (Zero exercício)", icon: "fa-solid fa-couch" },
                { text: "Leve (Caminhadas)", icon: "fa-solid fa-person-walking" },
                { text: "Moderada (1-3x semana)", icon: "fa-solid fa-person-running" },
                { text: "Intensa (Atleta)", icon: "fa-solid fa-medal" }
            ]
        },
        // 6. INTERSTITIAL: Metabolic Calculation
        {
            type: "interstitial",
            category: "metabolic_calc",
            title: "Calculando Idade Metabólica...",
            text: "Baseado no seu perfil, sua queima calórica pode estar até 30% abaixo do ideal. Vamos ajustar isso."
        },
        // 7. Experience with Calisthenics
        {
            question: "Já praticou <span style='color: var(--primary);'>Calistenia</span> antes?",
            category: "experience",
            options: [
                { text: "Nunca, sou iniciante", icon: "fa-solid fa-leaf" },
                { text: "Já tentei em casa", icon: "fa-solid fa-house" },
                { text: "Faço de vez em quando", icon: "fa-solid fa-person-running" },
                { text: "Sou experiente", icon: "fa-solid fa-medal" }
            ]
        },
        // 8. Push-up Test
        {
            question: "Quantas <span style='color: var(--primary);'>flexões</span> você consegue fazer?",
            category: "pushups",
            options: [
                { text: "Nenhuma (Nem de joelhos)", icon: "fa-solid fa-ban" },
                { text: "De 1 a 5 (Com dificuldade)", icon: "fa-solid fa-battery-quarter" },
                { text: "De 5 a 10 (Consigo bem)", icon: "fa-solid fa-battery-half" },
                { text: "Mais de 10 (Sou forte)", icon: "fa-solid fa-battery-full" }
            ]
        },
        // Social Proof 2
        {
            type: "interstitial",
            category: "social_proof_2",
            title: "Foco no Objetivo!",
            text: "Não importa por onde você comece, o importante é não parar.",
            image: "images/results/transform_2.jpg",
            testimonial: "\"O segredo foi seguir o passo a passo. A gordura da barriga sumiu!\""
        },
        // 9. Equipment Access (Crucial for Home Workout)
        {
            question: "O que você tem <span style='color: var(--primary);'>em casa</span>?",
            category: "equipment",
            options: [
                { text: "Apenas o peso do corpo", icon: "fa-solid fa-person" },
                { text: "Colchonete ou Tapete", icon: "fa-solid fa-scroll" },
                { text: "Elásticos / Pesinhos leves", icon: "fa-solid fa-dumbbell" },
                { text: "Equipamento completo", icon: "fa-solid fa-bicycle" }
            ]
        },
        // 10. Workout Duration
        {
            question: "Quanto tempo você tem <span style='color: var(--primary);'>por dia</span>?",
            category: "duration",
            options: [
                { text: "10-15 minutos (Rápido)", icon: "fa-solid fa-bolt" },
                { text: "20-30 minutos (Ideal)", icon: "fa-regular fa-clock" },
                { text: "45-60 minutos", icon: "fa-solid fa-hourglass-half" },
                { text: "Tempo não é problema", icon: "fa-solid fa-calendar-check" }
            ]
        },
        // 11. INTERSTITIAL: Water Tracker Feature
        {
            type: "interstitial",
            category: "app_feature_water",
            title: "Hidratação Inteligente 💧",
            text: "Nosso app calcula exatamente quantos litros de água você precisa beber para desinchar e acelerar o metabolismo.",
            image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600"
        },
        // 12. Water Intake
        {
            question: "Você bebe <span style='color: var(--primary);'>água suficiente</span>?",
            category: "water_habit",
            options: [
                { text: "Quase nada (Esqueço)", icon: "fa-solid fa-tint-slash" },
                { text: "1 litro ou menos", icon: "fa-solid fa-glass-whiskey" },
                { text: "Cerca de 2 litros", icon: "fa-solid fa-wine-bottle" },
                { text: "Sim, bebo muita água", icon: "fa-solid fa-faucet" }
            ]
        },
        // 13. Diet Struggles
        {
            question: "Qual sua maior <span style='color: var(--primary);'>dificuldade na dieta</span>?",
            category: "diet_struggle",
            options: [
                { text: "Doces e Açúcar", icon: "fa-solid fa-cookie-bite" },
                { text: "Carboidratos (Pão/Massa)", icon: "fa-solid fa-bread-slice" },
                { text: "Falta de tempo para cozinhar", icon: "fa-solid fa-stopwatch" },
                { text: "Não sei o que comer", icon: "fa-solid fa-question-circle" }
            ]
        },
        // 14. INTERSTITIAL: Meal Plan Feature
        {
            type: "interstitial",
            category: "app_feature_food",
            title: "Cardápio Completo 🥗",
            text: "Não se preocupe! O app gera um plano alimentar diário e até sua lista de compras automática.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600"
        },
        // 15. Cooking Habits
        {
            question: "Você costuma <span style='color: var(--primary);'>cozinhar</span>?",
            category: "cooking",
            options: [
                { text: "Odeio / Não sei cozinhar", icon: "fa-solid fa-xmark" },
                { text: "Cozinho o básico", icon: "fa-solid fa-egg" },
                { text: "Gosto de receitas práticas", icon: "fa-solid fa-book-open" },
                { text: "Amo cozinhar tudo", icon: "fa-solid fa-utensils" }
            ]
        },
        // Social Proof 3
        {
            type: "interstitial",
            category: "social_proof_3",
            title: "Transformação Real!",
            text: "Sua dedicação hoje é o seu corpo de amanhã.",
            image: "images/results/transform_3.jpg",
            testimonial: "\"Eu achei que não conseguiria por causa do tempo, mas os treinos curtos mudaram tudo!\""
        },
        // 16. Sleep Quality
        {
            question: "Como é a qualidade do seu <span style='color: var(--primary);'>sono</span>?",
            category: "sleep",
            options: [
                { text: "Durmo mal / Insônia", icon: "fa-solid fa-eye" },
                { text: "Acordo cansada", icon: "fa-solid fa-battery-empty" },
                { text: "Razoável", icon: "fa-solid fa-bed" },
                { text: "Durmo muito bem", icon: "fa-solid fa-moon" }
            ]
        },
        // 17. Energy Levels
        {
            question: "Como você se sente <span style='color: var(--primary);'>durante o dia</span>?",
            category: "energy",
            options: [
                { text: "Sempre cansada e sem ânimo", icon: "fa-solid fa-face-tired" },
                { text: "Tenho picos de energia", icon: "fa-solid fa-arrow-trend-up" },
                { text: "Me sinto bem na maior parte", icon: "fa-regular fa-face-smile" },
                { text: "Energia total o dia todo", icon: "fa-solid fa-sun" }
            ]
        },
        // 18. INTERSTITIAL: Social Proof 4 (FINAL GRID)
        {
            type: "interstitial",
            category: "social_proof_final",
            title: "Resultados que Falam por Si!",
            text: "Estas mulheres tomaram a decisão de mudar. Agora é a sua vez!",
            images: [
                "images/results/final_1.jpg",
                "images/results/final_2.jpg",
                "images/results/final_3.jpg",
                "images/results/final_4.jpg"
            ]
        },
        // 19. Motivation
        {
            question: "O que te faria <span style='color: var(--primary);'>não desistir</span>?",
            category: "motivation_trigger",
            options: [
                { text: "Ver resultados rápidos", icon: "fa-solid fa-gauge-high" },
                { text: "Apoio de uma comunidade", icon: "fa-solid fa-users" },
                { text: "Treinos divertidos e curtos", icon: "fa-solid fa-gamepad" },
                { text: "Um plano passo-a-passo claro", icon: "fa-solid fa-list-check" }
            ]
        },
        // 20. Commitment (Last Step)
        {
            question: "Você está pronta para se <span style='color: var(--primary);'>transformar</span>?",
            category: "commitment",
            options: [
                { text: "Sim, vou começar agora!", icon: "fa-solid fa-check-double" },
                { text: "Sim, preciso mudar", icon: "fa-solid fa-check" },
                { text: "Talvez, mas tenho dúvidas", icon: "fa-solid fa-question" },
                { text: "Vou tentar", icon: "fa-solid fa-arrow-right" }
            ]
        }
    ];

    // === State ===
    let currentStep = 0;
    const answers = {};

    // === Elements ===
    const mainEl = document.querySelector('main');

    // === Functions ===
    function init() {
        renderQuestion();
    }

    function renderQuestion() {
        if (currentStep >= questions.length) {
            finishQuiz();
            return;
        }

        const q = questions[currentStep];
        const contentEl = document.getElementById('quiz-content');

        // Update Progress bar
        const progressBar = document.getElementById('progress-bar');

        if (progressBar) progressBar.style.width = `${((currentStep + 1) / questions.length) * 100}%`;

        // Clear content
        if (contentEl) {
            contentEl.innerHTML = '';

            // Add Back Button if not on first step
            if (currentStep > 0 && q.type !== 'interstitial') {
                const backBtn = document.createElement('button');
                backBtn.className = 'btn-back';
                backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Voltar';
                backBtn.onclick = () => {
                    currentStep--;
                    renderQuestion();
                };
                contentEl.appendChild(backBtn);
            }
        }

        // Helper: Select and Next
        const selectAndNext = (element, selector, value, category) => {
            const container = element.closest('.options-grid') || element.closest('.options-grid-2x2');
            if (container) container.querySelectorAll(selector).forEach(c => c.classList.remove('selected'));
            element.classList.add('selected');
            setTimeout(() => handleAnswer(value, category), 300);
        };

        // Helper: Render Standard Title
        const renderTitle = (html) => {
            const title = document.createElement('h1');
            title.className = 'question-title fade-in';
            title.innerHTML = html;
            contentEl.appendChild(title);
        };

        // === TYPE 1: AGE GRID (Special 2x2 Layout) ===
        if (q.category === 'age') {
            const header = document.createElement('div');
            header.className = 'question-header fade-in';
            header.innerHTML = `
                <div class="question-title-main">Método <span class="question-title-highlight" style="color: var(--primary);">Barriga Zero</span></div>
                <div class="question-subtitle">Plano Personalizado</div>
            `;
            contentEl.appendChild(header);

            const grid = document.createElement('div');
            grid.className = 'options-grid-2x2 fade-in';

            q.options.forEach((opt) => {
                const card = document.createElement('div');
                card.className = 'age-card';
                card.innerHTML = `<img src="${opt.image}" class="age-card-image"><div class="age-card-label">${opt.text}</div><div class="radio-indicator"></div>`;
                card.onclick = () => selectAndNext(card, '.age-card', opt.text, q.category);
                grid.appendChild(card);
            });
            contentEl.appendChild(grid);
            return;
        }

        // === TYPE 2: INTERSTITIALS ===
        if (q.type === 'interstitial') {
            const container = document.createElement('div');
            container.className = 'social-proof-container fade-in';

            if (q.category.startsWith('social_proof')) {
                const title = q.title || "Resultado Real";
                const text = q.text || "";

                let mediaHtml = '';
                if (q.category === 'social_proof_final' && q.images) {
                    mediaHtml = `
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px; padding: 4px; background: rgba(0,0,0,0.2);">
                            ${q.images.map(img => `<img src="${img}" style="width: 100%; border-radius: 4px;" alt="Resultado">`).join('')}
                        </div>
                    `;
                } else {
                    const img = q.image || "images/results/transform_1.jpg";
                    const testimonial = q.testimonial || "\"Nunca imaginei que poderia ter esse corpo treinando na sala de casa.\"";
                    mediaHtml = `
                        <img src="${img}" style="width: 100%; display: block;" alt="Transformação">
                        <div style="padding: 15px;">
                            <p style="font-size: 1rem; color: #ffffff; font-style: italic; font-weight: 500; margin: 0;">${testimonial}</p>
                        </div>
                    `;
                }

                container.innerHTML = `
                    <h2 class="social-title" style="color: var(--primary); font-weight: 800; font-size: 1.8rem; margin-top: 10px;">${title}</h2>
                    <p class="social-text" style="color: #cbd5e1; margin-bottom: 20px;">${text}</p>
                    <div class="social-card" style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255,255,255,0.1); padding: 0; overflow: hidden; border-radius: 16px;">
                         <div style="background: rgba(255, 255, 255, 0.02); padding: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
                            <h3 style="font-size: 1rem; font-weight: 700; color: #fff; margin: 0;">Resultados Reais</h3>
                        </div>
                        ${mediaHtml}
                    </div>
                `;
            } else if (q.category === 'metabolic_calc') {
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem 0;">
                        <i class="fas fa-calculator" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
                        <h2 class="social-title" style="font-size: 1.5rem; color: #fff;">${q.title}</h2>
                        <p class="social-text" style="color: #cbd5e1;">${q.text}</p>
                        <div class="spinner" style="margin: 2rem auto; border-top-color: var(--primary);"></div>
                    </div>
                `;
                // Auto advance for calculation simulation
                contentEl.appendChild(container);
                setTimeout(() => {
                    currentStep++;
                    renderQuestion();
                }, 2500);
                return;

            } else if (q.category.startsWith('app_feature')) {
                container.innerHTML = `
                    <h2 class="social-title" style="color: #fff; font-size: 1.6rem;">${q.title}</h2>
                    <p class="social-text" style="color: #cbd5e1; font-size: 1rem; margin-bottom: 2rem;">${q.text}</p>
                    ${q.image ? `<img src="${q.image}" style="width: 100%; border-radius: 16px; margin-bottom: 2rem; border: 1px solid rgba(255,255,255,0.1);">` : ''}
                `;
            }

            const btn = document.createElement('button');
            btn.className = 'btn-continue';
            btn.textContent = 'CONTINUAR';
            btn.onclick = () => { currentStep++; renderQuestion(); };
            container.appendChild(btn);
            contentEl.appendChild(container);
            return;
        }

        // === TYPE 3: STANDARD OPTIONS ===
        renderTitle(q.question);

        const grid = document.createElement('div');
        grid.className = 'options-grid fade-in';

        q.options.forEach((opt) => {
            const isObject = typeof opt === 'object';
            const text = isObject ? opt.text : opt;
            const image = isObject ? opt.image : null;
            const icon = isObject ? opt.icon : null;

            const card = document.createElement('label');
            card.className = 'option-card';

            let html = '';
            if (image) {
                html += `<div class="option-image-wrapper"><img src="${image}" class="option-image"></div>`;
            } else if (icon) {
                html += `<div class="option-image-wrapper"><i class="${icon} option-icon"></i></div>`;
            }
            html += `<div class="option-content"><span class="option-label">${text}</span><div class="custom-radio"></div></div>`;

            card.innerHTML = html;
            card.addEventListener('click', () => selectAndNext(card, '.option-card', text, q.category));
            grid.appendChild(card);
        });
        contentEl.appendChild(grid);
    }

    function handleAnswer(answer, category) {
        answers[category] = answer;
        // Persistir no localStorage para o checkout usar
        localStorage.setItem('quiz_answers', JSON.stringify(answers));

        currentStep++;
        renderQuestion();
    }

    function finishQuiz() {
        if (mainEl) {
            mainEl.innerHTML = `
                <div style="text-align: center; padding: 40px; font-family: 'Montserrat', sans-serif; color: #fff;">
                     <h2 style="color: var(--primary); margin-bottom: 20px; font-weight: 800; text-transform: uppercase;">Análise Concluída!</h2>
                     <p style="margin-bottom: 30px; color: #cbd5e1; font-size: 1.1rem;">Seu Protocolo Barriga Zero está quase pronto...</p>
                     <div class="spinner" style="margin: 30px auto; border-top-color: var(--primary);"></div>
                      <div id="status-steps" style="text-align: left; max-width: 350px; margin: 0 auto; color: #cbd5e1; font-size: 0.95rem;">
                        <p id="step-1" style="margin-bottom: 12px; opacity: 0;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Analisando perfil metabólico...</p>
                        <p id="step-2" style="margin-bottom: 12px; opacity: 0;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Criando cronograma de treinos...</p>
                        <p id="step-3" style="margin-bottom: 12px; opacity: 0;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Preparando guia nutricional...</p>
                        <p id="step-4" style="margin-bottom: 12px; opacity: 0;"><i class="fas fa-check-circle" style="color: var(--primary); margin-right: 10px;"></i> Liberando acesso à plataforma...</p>
                      </div>
                </div>
            `;

            const showStep = (id, delay) => {
                setTimeout(() => {
                    const el = document.getElementById(id);
                    if (el) {
                        el.style.opacity = '1';
                        el.style.transition = 'opacity 0.5s ease-in';
                    }
                }, delay);
            };

            showStep('step-1', 800);
            showStep('step-2', 1800);
            showStep('step-3', 2800);
            showStep('step-4', 3800);

            setTimeout(() => {
                // Redirect to the Checkout Page (checkout.html)
                window.location.href = 'checkout.html';
            }, 5500);
        }
    }

    // Start
    init();
});
