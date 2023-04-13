import React from 'react'

const ProductRow = (props) => {
    const backgroundColor = props.status === "Published" ? "bg-green-200" : "bg-red-100";
    const textColor = props.status === "Published" ? "text-green-700" : "text-cashmere";
    return (
        <div className="flex justify-between">
            <img src={props.image} alt="product" className="w-10 h-10 ml-3 mb-8 rounded-lg" />
            <div className="flex flex-col ml-4">
                <span className="text-sm font-semibold">{props.name}</span>
                <span className="text-sm font-semibold text-gray-500">{props.variants.length} variants</span>
            </div>
            <div><span className="text-sm font-semibold text-gray-500">SKU:</span><span className="text-sm font-semibold">{props.sku}</span></div>
            <div className="text-sm font-semibold">{props.category}</div>
            <div className="text-sm font-semibold">{props.dateAdded}</div>
            <div className={`text-sm h-fit px-2 rounded-full font-semibold ${backgroundColor} ${textColor}`}>{props.status}</div>
        </div>
    )
}


export const Products = ({products}) => {
    let latestProducts = products.sort((a, b) => {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
    }).slice(0, 4);
  return (
    <div className="flex flex-col w-3/5 bg-white rounded-lg ml-2 pr-2 mt-6 text-xs overflow-auto">
        <div className="flex justify-between mb-4">
            <span className="ml-4 mt-4 text-sm text-gray-500">Latest Added Products</span>
            <span className="mr-4 mt-4 text-sm text-gray-500">...</span>
        </div>
        {latestProducts.map((item, index) => (
            <ProductRow key={index} {...item} />
        ))}
    </div>
  )
}
