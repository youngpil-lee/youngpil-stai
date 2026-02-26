export const initPayPalButton = (containerId: string, amount: string) => {
    // PayPal SDK가 로드되어 있다고 가정
    const paypal = (window as any).paypal;
    if (!paypal) {
        console.error("PayPal SDK not loaded");
        return;
    }

    paypal.Buttons({
        createOrder: (_data: any, actions: any) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: amount
                    }
                }]
            });
        },
        onApprove: async (_data: any, actions: any) => {
            const order = await actions.order.capture();
            console.log("Payment Approved:", order);
            // 이후 Firebase에 구독 상태 업데이트 로직 추가
        }
    }).render(`#${containerId}`);
};
