import React, { FC } from "react";

interface ProductProps {
    className?: string;

    params: {
        id: string;
    }
}

const ProductItem: FC<ProductProps> = async ({ className, params  }) =>   (
            <span className='text'>
                ProductItem {params.id}
            </span>
        );

export default ProductItem;
