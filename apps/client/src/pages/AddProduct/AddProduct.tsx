import React, { useCallback, useRef, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';

import { AddContainer, Btn, FlexProduct, Left, Right } from '../../Shared.style';
import { FolderAdd } from '../../Svg';
import { DateCard } from '../../components/DateCard/DateCard';
import { Input } from '../../components/Inputs/Input';
import { Tarea } from '../../components/Inputs/Tarea';
import { useProductMutations } from '../../hooks/useProductMutations';
import { useAppSelector } from '../../store/store';
import { FileDropContainer, RemoveBtn } from './AddProduct.style';

export const AddProduct = () => {
  const [info, setInfo] = useState({
    productName: '',
    productKey: '',
    productDescription: '',
    stock: '0',
    price: '0',
    discount: false,
  });
  const [img, setImg] = useState<string | null>(null);
  const formData = useRef<FormData>(new FormData());
  const theme = useTheme();
  const user = useAppSelector((state) => state.store.user);

  const onDrop = useCallback((acceptedFile) => {
    if (formData.current.has('image')) {
      formData.current.delete('image');
    }

    formData.current.append('image', acceptedFile[0]);
    setImg(URL.createObjectURL(new Blob(acceptedFile, { type: 'image/jpeg/jpg/png' })));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const { mutateAddProduct } = useProductMutations();

  const getActiveDrag = () => {
    if (isDragActive) return <p>Put Image</p>;

    if (!img) return <h4>Upload product image</h4>;

    return '';
  };

  const removeSelectedImage = (e) => {
    e.stopPropagation();
    formData.current.delete('image');
    setImg(null);
  };

  const onChange = (e) => {
    setInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formData.current.append(
      'info',
      Object.entries({ ...info, userId: user?.userId }) as any,
    );
    mutateAddProduct(formData.current);
  };

  return (
    <AddContainer onSubmit={onSubmit}>
      <Left>
        <Input
          info="Product name"
          placeholder="Enter Product Name"
          name="productName"
          onChange={onChange}
          value={info.productName}
        />
        <Tarea
          info="Short Product Description"
          placeholder="Product Description..."
          rows="4"
          name="productDescription"
          onChange={onChange}
          value={info.productDescription}
        />

        <FileDropContainer active={isDragActive ? 'true' : ''} {...getRootProps()}>
          <input {...getInputProps()} />
          {img && (
            <>
              <img src={img} alt="" />
              <RemoveBtn onClick={removeSelectedImage}>&times;</RemoveBtn>
            </>
          )}
          {getActiveDrag()}
        </FileDropContainer>
      </Left>

      <Right>
        <DateCard
          enabled={info.discount}
          onChange={() =>
            setInfo((prevState) => ({ ...prevState, discount: !prevState.discount }))
          }
        />

        <Input
          info="Product key"
          placeholder="1RRED94F45B99QTS"
          name="productKey"
          onChange={onChange}
          value={info.productKey}
        />
        <FlexProduct className="flex">
          <Input info="Stock" name="stock" onChange={onChange} value={info.stock} />
          <Input info="Price" name="price" onChange={onChange} value={info.price} />
        </FlexProduct>

        <Btn>
          <FolderAdd fill={theme.colors.shine} />
          <p>Save</p>
        </Btn>
      </Right>
    </AddContainer>
  );
};
