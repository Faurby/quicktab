import React from "react";

interface OrderItem {
  name: string;
  price: number;
}

interface OrderSummaryProps {
  order: OrderItem[];
  onRemove: (index: number) => void;
}

// https://qr.mobilepay.dk/box/492bd6a9-6937-413e-b19d-5dc342c2e9bc/pay-in
// https://qr.mobilepay.dk/box/492bd6a9-6937-413e-b19d-5dc342c2e9bc/pay-in?amount=100&comment=Bar%20order&lock=1

const OrderSummary: React.FC<OrderSummaryProps> = ({ order, onRemove }) => {
  const shopPhoneNumber = "9403MY";

  const total = order.reduce((sum, item) => sum + item.price, 0);
  const orderComment = order.reduce(
    (acc, item) => acc + `${item.name} (${item.price} DKK)\n`,
    ""
  );

  const mobilePayLink =
    `https://qr.mobilepay.dk/box/492bd6a9-6937-413e-b19d-5dc342c2e9bc/pay-in?` +
    `amount=${total * 100}` +
    `&message=${encodeURIComponent(orderComment)}`;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-3">Current Order</h3>
      {order.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        <div className="mb-4">
          {order.map((item, idx) => (
            <div
              key={idx}
              className="py-1 border-b border-gray-200 flex justify-between items-center"
            >
              <span>{item.name}</span>
              <div className="flex items-center gap-2">
                <span>{item.price} DKK</span>
                <button
                  onClick={() => onRemove(idx)}
                  className="text-red-500 hover:text-red-700 transition"
                  title="Remove item"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="font-bold text-lg">Total: {total} DKK</p>

      {order.length > 0 && (
        <div className="mt-4">
          <a
            href={mobilePayLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Finish Order
          </a>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
