<script lang="ts">
  import { LL } from '$lib/i18n/i18n-svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<h1>{$LL.APPLES(data)}</h1>
