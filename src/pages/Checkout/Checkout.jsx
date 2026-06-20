import { Link } from 'react-router-dom';
import BagCard from '../../components/Card/BagCard';
import { useBag } from '../../hooks/useBag';

function CheckoutPage() {
  const { items, removeFromBag, updateQuantity, subtotal, totalCount, isEmpty } = useBag();

  return (
    <div className="lg:px-16 lg:py-6 max-w-400 mx-auto md:px-8 px-4 py-4">
      <h3 className="text-gray-500">
        <Link to="/" className="hover:text-blue-600">Home</Link> / Bag
      </h3>
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Your bag</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-2/3">
          <div className="bg-white p-4 md:p-6 rounded shadow">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Items in your bag</h2>

            {isEmpty ? (
              <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500 bg-linear-to-b from-gray-200 to-gray-100 rounded">
                <div className="flex items-center justify-center mb-2">
                  <img src="/src/assets/bag-icon.jpg" alt="" className="w-12 h-12 opacity-40" />
                </div>
                <h3 className="font-bold text-lg ">Your bag is empty</h3>
                <p className="">
                  Browse our collection and add books you would like to read.
                </p>
                <Link to="/books" className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <BagCard
                    key={item.id}
                    item={item}
                    onRemove={removeFromBag}
                    onUpdateQuantity={updateQuantity}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/3">
          <div className="bg-white p-4 md:p-6 rounded shadow text-gray-700">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal ({totalCount} {totalCount === 1 ? 'item' : 'items'})</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2 pb-3 border-b border-(--border-color)">
              <span>Shipping</span>
              <span>{isEmpty ? '-' : 'Free'}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-xl text-red-600">${subtotal.toFixed(2)}</span>
            </div>
            <button
              disabled={isEmpty}
              className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
            </button>
            <div className="text-center mt-3 text-sm text-gray-500">
              You will be asked to sign in to complete your order.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
