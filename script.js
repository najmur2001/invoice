document.addEventListener("DOMContentLoaded", function() {
    // Example data object
    const invoiceData = {
        seller: {
            name: "Najmur Pvt Ltd",
            address1: "265,Shri Lakshmi PG,2nd cross",
            address2: "Neeladri Nagar,Electronics city",
            phone: "+91 9564982496",
            email: "najmurhossain2001@gmail.com",
            contact: "Najmur Hossain"
        },
        order: {
            date: "26-08-2024",
            number: "A246",
            customerNumber: "114H"
        },
        billTo: {
            name: "XYZ Ltd",
            address: "789 Commerce St",
            city: "Kolkata,WB,India",
            phone: "(321) 456-7890",
            email: "billing@xyzltd.com"
        },
        shipTo: {
            name: "Cdata Software",
            address: "CGI road,Electronics city phase 1",
            city: "Bengaluru",
            phone: "(321) 456-7890",
            email: "shipping@xyzltd.com"
        },
        additionalInfo: {
            poNo: "XXXYYYZZZ",
            salesPerson: "Najmur Hossain",
            shipVia: "DLF",
            shippingDate: "27-08-2024",
            shippingMethod: "Airline",
            shippingTerms: "Arranged by Seller",
            paymentTerms: "NET 30",
            deliveryDate: "27-08-2024"
        },
        items: [
            { sku: "A111", name: "T Shirt", description: "Women's Tall - M", qty: 2, unitPrice: 1000.00, total: 2000.00 },
            { sku: "B222", name: "Shirt", description: "Men's Tall - M", qty: 5, unitPrice: 500.00, total: 2500.00 },
            { sku: "C333", name: "Jeans", description: "Children's - S", qty: 10, unitPrice: 500.00, total: 5000.00 },
            { sku: "D444", name: "Shoes", description: "Men's - XL", qty: 5, unitPrice: 200.00, total: 1000.00 }
        ],
        totals: {
            subtotal: 10500.00,
            discount: 0.00,
            subtotalLessDiscount: 10500.00,
            cgst: 525.00,
            sgst: 525.00,
            shipping: 50.00,
            grandTotal: 11600.00
        },
        instructions: "Handle with care."
    };

    // Populate seller info
    document.getElementById("seller-name").textContent = invoiceData.seller.name;
    document.getElementById("seller-address1").textContent = invoiceData.seller.address1;
    document.getElementById("seller-address2").textContent = invoiceData.seller.address2;
    document.getElementById("seller-phone").textContent = invoiceData.seller.phone;
    document.getElementById("seller-email").textContent = invoiceData.seller.email;
    document.getElementById("seller-contact").textContent = invoiceData.seller.contact;

    // Populate order info
    document.getElementById("order-date").textContent = invoiceData.order.date;
    document.getElementById("order-no").textContent = invoiceData.order.number;
    document.getElementById("customer-no").textContent = invoiceData.order.customerNumber;

    // Populate billing info
    document.getElementById("bill-name").textContent = invoiceData.billTo.name;
    document.getElementById("bill-address").textContent = invoiceData.billTo.address;
    document.getElementById("bill-city").textContent = invoiceData.billTo.city;
    document.getElementById("bill-phone").textContent = invoiceData.billTo.phone;
    document.getElementById("bill-email").textContent = invoiceData.billTo.email;

    // Populate shipping info
    document.getElementById("ship-name").textContent = invoiceData.shipTo.name;
    document.getElementById("ship-address").textContent = invoiceData.shipTo.address;
    document.getElementById("ship-city").textContent = invoiceData.shipTo.city;
    document.getElementById("ship-phone").textContent = invoiceData.shipTo.phone;
    document.getElementById("ship-email").textContent = invoiceData.shipTo.email;

    // Populate additional info
    document.getElementById("po-no").textContent = invoiceData.additionalInfo.poNo;
    document.getElementById("sales-person").textContent = invoiceData.additionalInfo.salesPerson;
    document.getElementById("ship-via").textContent = invoiceData.additionalInfo.shipVia;
    document.getElementById("shipping-date").textContent = invoiceData.additionalInfo.shippingDate;
    document.getElementById("shipping-method").textContent = invoiceData.additionalInfo.shippingMethod;
    document.getElementById("shipping-terms").textContent = invoiceData.additionalInfo.shippingTerms;
    document.getElementById("payment-terms").textContent = invoiceData.additionalInfo.paymentTerms;
    document.getElementById("delivery-date").textContent = invoiceData.additionalInfo.deliveryDate;

    // Populate order details
    const orderTableBody = document.querySelector("#order-table tbody");
    invoiceData.items.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.sku}</td>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.qty}</td>
            <td>$${item.unitPrice.toFixed(2)}</td>
            <td>$${item.total.toFixed(2)}</td>
        `;
        orderTableBody.appendChild(row);
    });

    // Populate totals
    document.getElementById("subtotal").textContent = invoiceData.totals.subtotal.toFixed(2);
    document.getElementById("discount").textContent = invoiceData.totals.discount.toFixed(2);
    document.getElementById("subtotal-less-discount").textContent = invoiceData.totals.subtotalLessDiscount.toFixed(2);
    document.getElementById("cgst").textContent = invoiceData.totals.cgst.toFixed(2);
    document.getElementById("sgst").textContent = invoiceData.totals.sgst.toFixed(2);
    document.getElementById("shipping").textContent = invoiceData.totals.shipping.toFixed(2);
    document.getElementById("grand-total").textContent = invoiceData.totals.grandTotal.toFixed(2);

    // Populate special instructions
    document.getElementById("instructions").textContent = invoiceData.instructions;
});
