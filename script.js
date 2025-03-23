function openModal(service) {
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-description');
    const benefits = document.getElementById('modal-benefits');

    if (service === 'washing') {
        title.innerText = 'Washing Service';
        description.innerText = 'We offer fast and efficient washing for your clothes, ensuring quality and freshness.';
        benefits.innerHTML = `
                    <li>Quick turn around time</li>
                    <li>Efficient stain removal</li>
                    <li>Eco-friendly detergents</li>
                `;
    } else if (service === 'ironing') {
        title.innerText = 'Ironing Service';
        description.innerText = 'Our ironing service ensures your clothes are wrinkle-free and ready to wear.';
        benefits.innerHTML = `
                    <li>Professional wrinkle removal</li>
                    <li>Perfect for all types of clothes</li>
                    <li>Careful handling of delicate fabrics</li>
                `;
    } else if (service === 'dryCleaning') {
        title.innerText = 'Dry Cleaning Service';
        description.innerText = 'We provide high-quality dry cleaning for your delicate fabrics, ensuring no damage or shrinkage.';
        benefits.innerHTML = `
                    <li>Gentle cleaning for delicate fabrics</li>
                    <li>Stain removal without damage</li>
                    <li>Fast and efficient service</li>
                `;
    }

    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}