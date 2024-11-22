import { useQuery } from '@tanstack/react-query';

import { getSamplesData } from '@/features/sample/data/get-samples';

export function useSamplesQuery() {
  return useQuery({
    queryKey: ['/samples'],
    queryFn: getSamplesData,
  });
}
