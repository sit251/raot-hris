export function createHeader(icon, title, subtitle){

    return `

    <h2 style="color:#006633;">
        <i class="bi ${icon}"></i>
        ${title}
    </h2>

    <p class="subtitle">
        ${subtitle}
    </p>

    <div class="section-title">
        เมนูบริการ
    </div>

    `;

}

export function createMenuCard(id, icon, title, desc) {

    return `

    <div class="menu-card" id="${id}">

        <div class="menu-icon">
            <i class="bi ${icon}"></i>
        </div>

        <div class="menu-content">

            <div class="menu-title">
                ${title}
            </div>

            <div class="menu-desc">
                ${desc}
            </div>

        </div>

        <i class="bi bi-chevron-right menu-arrow"></i>

    </div>

    `;

}

export function createBackButton(id, text){

    return `

    <button
    class="login-btn welfare-btn"
    id="${id}">

        <span>

            <i class="bi bi-arrow-left-circle-fill"></i>

            ${text}

        </span>

        <i class="bi bi-chevron-right"></i>

    </button>

    `;

}

export function createFaqCard(icon, title, content){

    return `

    <div class="faq-card">

        <div class="question">

            <i class="bi ${icon}"></i>

            ${title}

        </div>

        <div class="answer">

            ${content}

        </div>

    </div>

    `;

}