const data = [
    // Ủy viên Ban Chấp hành Đảng bộ
    { category: "Ủy viên Đảng bộ", title: "Nguyễn Văn A", details: "Bí thư Huyện ủy Tân Trụ", link: '/member-detail.html' },
    { category: "Ủy viên Đảng bộ", title: "Trần Thị B", details: "Phó Bí thư - Chủ tịch UBND huyện", link: '/member-detail.html' },
    // Tin tức, sự kiện
    { category: "Tin tức", title: "Đại hội Đảng bộ Tân Trụ 2025", details: "Diễn ra ngày 20/2/2025", link: '/news-detail.html' },
    { category: "Tin tức", title: "Khánh thành cầu mới", details: "Tại xã Nhựt Ninh", link: '/news-detail.html' },
    // Điểm đến
    { category: "Điểm đến", title: "Đường Cau Vua", details: "Xã Đức Tân - Đường chụp ảnh đẹp", link: '/camera360.html#cho-tan-tru' },
    { category: "Điểm đến", title: "Vàm Nhựt Tảo", details: "Xã An Nhựt Tân - Di tích lịch sử", link: '/camera360.html#cho-tan-tru' },
    // // Đặc sản
    // { category: "Đặc sản", title: "Thanh long Tân Trụ", details: "Sản phẩm OCOP 3 sao" },
    // { category: "Đặc sản", title: "Gạo Tân Trụ", details: "Gạo thơm đặc sản" }
];

$(document).ready(function () {

    new Swiper(".banner-slider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 8000,
        },
    });

    new Swiper(".member-list", {
        spaceBetween: 24,
        slidesPerView: 5,
        loop: true,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 8000,
        },
    });

    new Swiper(".food-list", {
        slidesPerView: 1.8,
        centeredSlides: true,
        spaceBetween: 12,
        loop: true,
        navigation: {
            nextEl: ".swiper-btn-next",
            prevEl: ".swiper-btn-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 8000,
        },
        breakpoints: {
            1500: {
                slidesPerView: 1.8,
            },
            900: {
                slidesPerView: 1.5,
            },
        },
    });

    /**
    * SEARCHING 
    **/

    const searchBar = document.getElementById('search-bar');
    const resultsList = document.getElementById('results');

    function displayResults(query) {
        resultsList.innerHTML = '';

        if (query.trim() === '') {
            return;
        }

        const filtered = data.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.details.toLowerCase().includes(query.toLowerCase())
        );

        filtered.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.link}"><span class="category">[${item.category}]</span> ${item.title} - ${item.details}</a>`;
            // li.onclick = () => {
            //     alert(`Bạn chọn: ${item.title} (${item.category})`);
            // };
            resultsList.appendChild(li);
        });

        if (filtered.length === 0) {
            const li = document.createElement('li');
            li.textContent = "Không tìm thấy kết quả phù hợp";
            resultsList.appendChild(li);
        }
    }

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            displayResults(e.target.value);
        });
    
        document.addEventListener('click', () => {
            $('#results').removeClass('active')
        });
    
        searchBar.addEventListener('click', (event) => {
            results.classList.add('active');
            event.stopPropagation();
        });
    }


});
