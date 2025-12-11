import { useState } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import './DownloadButton.css'

function DownloadButton({ resumeRef }) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    if (!resumeRef.current) return

    setIsGenerating(true)
    
    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      })

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF('p', 'mm', 'a4')
      
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgScaledWidth = imgWidth * ratio
      const imgScaledHeight = imgHeight * ratio
      
      const heightLeft = imgScaledHeight
      let position = 0

      pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
      let heightLeftOnPage = pdfHeight - imgScaledHeight

      while (heightLeft >= pdfHeight) {
        position = heightLeftOnPage - heightLeft
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgScaledWidth, imgScaledHeight)
        heightLeft -= pdfHeight
      }

      pdf.save('Adam_Bacchus_Resume.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button 
      onClick={handleDownload} 
      className="download-button"
      disabled={isGenerating}
    >
      {isGenerating ? 'Generating PDF...' : 'Download PDF Resume'}
    </button>
  )
}

export default DownloadButton

