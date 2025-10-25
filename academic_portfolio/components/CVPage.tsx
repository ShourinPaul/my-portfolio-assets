
import React from 'react';

interface CVPageProps {
    navigateTo: (page: string) => void;
}

const CVPage: React.FC<CVPageProps> = ({ navigateTo }) => {
    // <<< IMPORTANT: REPLACE THIS WITH THE DIRECT LINK TO YOUR HOSTED CV PDF FILE! >>>
    // Example: "https://your-domain.com/path/to/your-cv.pdf"
    // Or, for Google Drive/Dropbox, ensure it's a direct link, not just a shareable viewer link.
    const cvPdfUrl = "https://drive.google.com/file/d/11DRbt123o2VAb82-uOLNyOrnTufasj4N/preview"; // Updated with your CV PDF link!

    return (
        <div className="min-h-screen bg-slate-900 text-slate-300 py-20 px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-center mb-8 text-white">My Curriculum Vitae (CV)</h2>
                <button
                    onClick={() => navigateTo('portfolio')}
                    className="mb-8 px-6 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-600 transition-colors flex items-center mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Portfolio
                </button>
                <div className="bg-slate-800 p-4 rounded-lg shadow-md border border-slate-700 w-full h-[80vh] flex items-center justify-center">
                    {/* Using an iframe to embed the PDF */}
                    {/* The cvPdfUrl is now provided, so we can directly render the iframe. */}
                    <iframe
                        src={cvPdfUrl}
                        className="w-full h-full border-none rounded-lg"
                        title="Shourin Paul CV"
                        aria-label="Shourin Paul's Curriculum Vitae"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Recommended for security
                    >
                        <p className="text-slate-400">
                            Your browser does not support PDFs. You can download the CV directly.
                            <a href={cvPdfUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline ml-2">Download CV</a>.
                        </p>
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default CVPage;