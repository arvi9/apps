import { useQuery } from 'react-query';
import { useState, useRef } from 'react';
import { useRequestProtocol } from './useRequestProtocol';
import { GET_USERNAME_SUGGESTION } from '../graphql/users';
import { graphqlUrl } from '../lib/config';

interface UseGenerateUsername {
  username?: string;
  setUsername: (value: string) => void;
}

export const useGenerateUsername = (
  name: string | undefined,
): UseGenerateUsername => {
  const [username, setUsername] = useState('');
  const usernameRef = useRef(false);
  const { requestMethod } = useRequestProtocol();
  const usernameQueryKey = ['generateUsername', name];
  const { data } = useQuery<{
    generateUniqueUsername: string;
  }>(
    usernameQueryKey,
    () =>
      requestMethod(
        graphqlUrl,
        GET_USERNAME_SUGGESTION,
        { name },
        { requestKey: JSON.stringify(usernameQueryKey) },
      ),
    {
      enabled: !!name?.length && usernameRef.current !== true,
    },
  );

  if (data?.generateUniqueUsername && !usernameRef.current) {
    usernameRef.current = true;

    if (!username.length) {
      setUsername(data.generateUniqueUsername);
    }
  }

  return {
    username,
    setUsername,
  };
};
