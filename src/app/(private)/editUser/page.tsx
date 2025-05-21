'use client';
import styles from './EditUser.module.css';
import { ChangeEvent, useRef } from 'react';
import { useState } from 'react';

export default function NewArEditUserticle() {
  
  const [preImagem, setImagemPre] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const preUrl = URL.createObjectURL(file);
      setImagemPre(preUrl);
    }
  }

  const handleTextInputClick = () => {
    fileInputRef.current?.click(); // Trigger click on the hidden file input
  };

  return (
    <div>
      <main className={styles.main}>
        <form action="" className={styles.formulario}>
          <div className={styles.header}>
            <h1 className={styles.h1}>Editar Perfil</h1>
            <div className={styles.grupoDireita}>
              <button className={styles.cancelarBotao}>Cancelar</button>
              <button className={styles.salvarBotao}>Salvar</button>
            </div>
          </div>
        
          {/* IMAGEM */}

          <div className={styles.grupoImagem}>

            <div className={styles.inserirImagem}>
              <label htmlFor="" className={styles.label}>Inserir avatar</label>
              <input
                type="file"
                name="imageUpload"
                id="imageUpload"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                placeholder='Adicione uma imagem'
                ref={fileInputRef} // Attach the ref here
              />
              <input 
                type="text"
                placeholder="Adicione uma imagem"
                className={`${styles.input} ${styles.inputImagemDisplay}`}
                value={preImagem ? "Imagem selecionada" : ""} 
                readOnly
                onClick={handleTextInputClick}
              />
              <label htmlFor="imagemUpload" className={styles.selecionarImagem}>SELECIONAR</label>
              <div className={styles.grupoForm}>
              <label htmlFor="" className={styles.label}>Nome</label>
              <input type="text" placeholder="Nome" className={styles.input}/>
              <label htmlFor="" className={styles.label}>Sobrenome</label>
              <input type="text" placeholder="Sobrenome" className={styles.input}/>
            </div>
            </div>

            <div className={styles.previewImagem}>
              { preImagem ? (
                <img src={preImagem} alt="Pré-visualização da imagem" className={styles.previewImagem}/>
              ) : (
                <img src="/images/imagemnull.png" alt="Imagem" className={styles.placeholderImagem}/>
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}