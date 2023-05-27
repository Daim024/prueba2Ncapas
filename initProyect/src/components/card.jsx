import React from 'react'

const products = [
    {
      id: 1,
      name: 'Películas',
      href: '#',
      price: 'Encontraras los eventos en cine.',
      imageSrc: 'https://artesiete.es/Posters/fastfuriousx.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 1,
      name: 'Películas',
      href: '#',
      price: 'Encontraras los eventos en cine.',
      imageSrc: 'https://artesiete.es/Posters/fastfuriousx.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 1,
      name: 'Películas',
      href: '#',
      price: 'Encontraras los eventos en cine.',
      imageSrc: 'https://artesiete.es/Posters/fastfuriousx.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 1,
      name: 'Películas',
      href: '#',
      price: 'Encontraras los eventos en cine.',
      imageSrc: 'https://artesiete.es/Posters/fastfuriousx.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
   
    
] 

  export default function Cards() {
    return (
    <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl  "> 
        <h1 className="text-xl text-yellow-500 ">Proximos Eventos</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-16 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group ">
              <div className=" aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-slate-900 xl:aspect-h-8 xl:aspect-w-7 shadow-inner">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" h-full w-full object-cover object-center group-hover:opacity-75 "
                />
              </div>
              <h3 className="mt-4 text-sm text-[#00df9a]">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">{product.price}</p> 
            </a>
          ))}
        </div>
      </div>

    )
  }


