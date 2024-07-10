import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getToken } from './auth'; // Importe a função getToken do serviço de autenticação

interface UserProfile {
  name: string;
  email: string;
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = await getToken();
      if (!token) {
        console.error('Token não encontrado.');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/profiles/:id`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.log('Erro ao obter perfil:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao conectar ao servidor:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <Text>Carregando perfil...</Text>;
  }

  return (
    <View>
      <Text>Perfil do Usuário</Text>
      <Text>Nome: {profile.name}</Text>
      <Text>Email: {profile.email}</Text>
    </View>
  );
}
