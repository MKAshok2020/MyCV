import  { useEffect } from 'react'

function useDocumentTitle(txttitle) {
  
    useEffect(()=> {
    document.title = txttitle;
    
}); 
}

export default useDocumentTitle
