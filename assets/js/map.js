const locations = [
    { 
        name: "Vàm Nhựt Tảo", 
        lat: 10.56109114589201, 
        lng: 106.51763485382946,
        address: "Ấp Nhựt Tảo, xã Nhựt Ninh, huyện Tân Trụ, tỉnh Long An", 
        googleMapLink: "https://www.google.com/maps?q=10.56109114589201,106.51763485382946",
        image: 'https://media2.gody.vn/public/images/destination/1/80/khu-di-tich-lich-su-vam-nhut-tao/pl620094a2a60c0-1644205218.jpeg',
        tag: 'vam-nhut-tao'
    },
    { 
        name: "Chợ Tân Trụ", 
        lat: 10.513490586087253, 
        lng: 106.50901090964672,
        address: "Thị trấn Tân Trụ, huyện Tân Trụ, tỉnh Long An", 
        googleMapLink: "https://www.google.com/maps?q=10.513490586087253,106.50901090964672",
        image: 'http://localhost:5500/assets/images/banner-7.jpg',
        tag: 'cho-tan-tru'
    },
    { 
        name: "Công viên Tân Trụ", 
        lat: 10.514123508629751, 
        lng: 106.50670420998438,
        address: "Đường Nguyễn Trung Trực, thị trấn Tân Trụ, huyện Tân Trụ, tỉnh Long An", 
        googleMapLink: "https://www.google.com/maps?q=10.514123508629751,106.50670420998438",
        image: 'https://cdn.tgdd.vn/Files/2023/11/26/1555979/luu-ngay-5-dia-diem-du-lich-tan-tru-long-an-thu-hut-du-khach-202311262356026067.jpg',
        tag: 'cong-vien-tan-tru'
    },
    { 
        name: "Chùa Cửu Long", 
        lat: 10.525400632537405, 
        lng: 106.52170989430526,
        address: "27 Xóm Chùa, Kp.Tân Bình, Tân Trụ, Long An 82306, Việt Nam", 
        googleMapLink: "https://maps.app.goo.gl/8LScK9bZQDe996SAA",
        image: 'https://cdn.tgdd.vn/Files/2023/11/26/1555979/luu-ngay-5-dia-diem-du-lich-tan-tru-long-an-thu-hut-du-khach-202311262353035414.jpg',
        tag: 'chua-tan-tru'
    },
    { 
        name: "Hàng cau vua Tân Trụ", 
        lat: 10.516482702433938, 
        lng: 106.51535970856061,
        address: "93B Nguyễn Trung Trực, TT. Tân Trụ, Tân Trụ, Long An, Việt Nam", 
        googleMapLink: "https://maps.app.goo.gl/XnHx7Go1GexkuRhV9",
        image: 'https://storage-vnportal.vnpt.vn/gov-lan/SharePointFolders/ThuVienAnh/%E1%BA%A2nh%20T%C3%A2n%20Tr%E1%BB%A5/H%C3%A0ng%20cao%20%C4%90%E1%BB%A9c%20T%C3%A2n%201.jpg',
        tag: 'hang-cau-vua'
    }
];

$(document).ready(function () {
    if ($('#map').length > 0) {
        const map = L.map('map').setView([10.543505116588065, 106.51642128531711], 12);
    
        const baseLayers = {
            "Bản đồ thường": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© VNPT Long An'
            }),
            "Vệ tinh": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: '© VNPT Long An'
            })
        };
    
        baseLayers["Bản đồ thường"].addTo(map);
    
        L.control.layers(baseLayers).addTo(map);
    
        const list = document.getElementById('location-list');
        locations.forEach(location => {
            
            const marker = L.marker([location.lat, location.lng])
                .addTo(map)
                .bindPopup(`
                    <div classname='card'>
                        <div classname='card-img'>
                            <img width='100%' height='140px' classname='card-img-top' src='${location.image}' alt='${location.name}' />
                        </div>
                        <div classname='card-body'>
                            <div classname='card-title' style="padding-top: 6px; padding-bottom: 2px; font-size: 13px;">
                                <b>
                                    ${location.name}
                                </b>
                            </div>
                            <div classname='card-text' style="font-size: 11px; line-height: 16px;">
                                <div style="padding-bottom: 6px; font-weight:500;">
                                    Địa chỉ: ${location.address}<br>
                                </div>
                                <div>
                                    <a href="/camera360.html#${location.tag}">Xem Camera360</a>
                                </div>
                                <div>
                                    <a href="${location.googleMapLink}" target="_blank">Xem trên Google Maps</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                
    
            // Thêm vào danh sách với địa chỉ và link
            const li = document.createElement('li');
            li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="12px" height="12px" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512"/><path fill="currentColor" d="M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32"/><path fill="currentColor" d="M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912"/></svg> ${location.name}`;
            li.onclick = () => {
                document.querySelectorAll('li').forEach(item => item.classList.remove('active'));
                map.setView([location.lat, location.lng], 15);
                marker.openPopup();
                li.classList.toggle('active')
            };
            list.appendChild(li);
        });
    }
});