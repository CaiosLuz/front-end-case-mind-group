'use client';
import styles from './EditArticle.module.css';
import { ChangeEvent, useRef } from 'react';
import { useState } from 'react';

export default function EditArticle() {
  
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
            <h1 className={styles.h1}>Editar artigo</h1>
            <div className={styles.grupoDireita}>
              <button className={styles.cancelarBotao}>Cancelar</button>
              <button className={styles.salvarBotao}>Salvar</button>
            </div>
          </div>
          <div className={styles.grupoForm}>
            <label htmlFor="" className={styles.label}>Título</label>
            <input type="text" placeholder="Adicione um título" className={styles.input}/>
          </div>

          {/* IMAGEM */}

          <div className={styles.grupoImagem}>

            <div className={styles.inserirImagem}>
              <label htmlFor="" className={styles.label}>Inserir imagem</label>
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
            </div>

            <div className={styles.previewImagem}>
              { preImagem ? (
                <img src={preImagem} alt="Pré-visualização da imagem" className={styles.previewImagem}/>
              ) : (
                <img src="/images/imagemnull.png" alt="Imagem" className={styles.placeholderImagem}/>
              )}
            </div>
          </div>

          {/* INPUT TEXTO DO ARTIGO */}

          <div className={styles.grupoForm}>
            <label htmlFor="" className={styles.label}>Texto</label>
            <textarea name="" id="" placeholder="Escreva seu artigo" className={styles.textarea}></textarea>
          </div>
        </form>
      </main>
    </div>
  );
}