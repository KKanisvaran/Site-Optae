import React from 'react';
import Collaborateur from "@/_components/CardCollaborateur";

async function getCollaborateurs() {

        const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/collaborateurs?populate=*`;
        const response = await fetch(endpoint, { next: { revalidate: 0 } });
        const jsonResponse = await response.json();
        return jsonResponse.data;
}

export default async function Equipe() {
  const collaborateurs = await getCollaborateurs();

  return(
    <main>
        <Collaborateur collaborateurs={collaborateurs} />
    </main>
  );

}

