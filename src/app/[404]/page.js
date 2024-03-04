import React from 'react';

function Page404Light() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="wrap">
        <div className="404">
          <pre>
            <code className="text-black">
              {'('}<span className="text-blue-500">function</span>() {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-blue-500">function</span> launch() {'{'}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log("Erro 404: Como você chegou aqui? 😂");
              <br />
              &nbsp;&nbsp;{'}'}
              <br />
              &nbsp;&nbsp;window.addEventListener(<span className="text-yellow-500">'load'</span>, launch);
              <br />
              {'}'})();
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Page404Light;
