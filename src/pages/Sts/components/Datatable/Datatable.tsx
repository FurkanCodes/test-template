import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"; //if using mantine date picker features
import "mantine-react-table/styles.css"; //make sure MRT styles were imported in your app root (once)
import { useMemo, useState } from "react";
import {
  MRT_EditActionButtons,
  MantineReactTable,
  // createRow,
  type MRT_ColumnDef,
  type MRT_Row,
  type MRT_TableOptions,
  useMantineReactTable,
} from "mantine-react-table";
import {
  ActionIcon,
  Button,
  Flex,
  Group,
  Paper,
  Stack,
  Stepper,
  Text,
  Title,
  Tooltip,
} from "@mantine/core";
import { ModalsProvider, modals } from "@mantine/modals";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { type User, fakeData, usStates } from "./makeData";
import { MRT_Localization_TR } from "mantine-react-table/locales/tr/index.cjs";

const Example = () => {
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string | undefined>
  >({});
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "id",
        header: "Numarası",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "firstName",
        header: "Kurum",
        mantineEditTextInputProps: {
          type: "email",
          required: true,
          error: validationErrors?.firstName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              firstName: undefined,
            }),
          //optionally add validation checking for onBlur or onChange
        },
      },
      {
        accessorKey: "lastName",
        header: "Belge Türü",
        mantineEditTextInputProps: {
          type: "email",
          required: true,
          error: validationErrors?.lastName,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              lastName: undefined,
            }),
        },
      },
      {
        accessorKey: "email",
        header: "Sözleşme Bitiş Tarihi",
        mantineEditTextInputProps: {
          type: "date",
          required: true,
          error: validationErrors?.email,
          //remove any previous validation errors when user focuses on the input
          onFocus: () =>
            setValidationErrors({
              ...validationErrors,
              email: undefined,
            }),
        },
      },
      {
        accessorKey: "state",
        header: "Eyalet",
        editVariant: "select",
        mantineEditSelectProps: {
          data: usStates,
          error: validationErrors?.state,
        },
      },
    ],
    [validationErrors]
  );

  //call CREATE hook
  const { mutateAsync: createUser, isPending: isCreatingUser } =
    useCreateUser();
  //call READ hook
  const {
    data: fetchedUsers = [],
    isError: isLoadingUsersError,
    isFetching: isFetchingUsers,
    isLoading: isLoadingUsers,
  } = useGetUsers();
  //call UPDATE hook
  const { mutateAsync: updateUser, isPending: isUpdatingUser } =
    useUpdateUser();
  //call DELETE hook
  const { mutateAsync: deleteUser, isPending: isDeletingUser } =
    useDeleteUser();

  //CREATE action
  const handleCreateUser: MRT_TableOptions<User>["onCreatingRowSave"] = async ({
    values,
    exitCreatingMode,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await createUser(values);
    exitCreatingMode();
  };

  //UPDATE action
  const handleSaveUser: MRT_TableOptions<User>["onEditingRowSave"] = async ({
    values,
    table,
  }) => {
    const newValidationErrors = validateUser(values);
    if (Object.values(newValidationErrors).some((error) => error)) {
      setValidationErrors(newValidationErrors);
      return;
    }
    setValidationErrors({});
    await updateUser(values);
    table.setEditingRow(null); //exit editing mode
  };

  //DELETE action
  const openDeleteConfirmModal = (row: MRT_Row<User>) =>
    modals.openConfirmModal({
      title: "Başvuruyu silmek istediğinize emin misiniz??",
      children: (
        <Text>
          {row.original.firstName} adlı başvuruyu silmek istediğinize emin misiniz?
          Bu işlem geri alınamaz.
        </Text>
      ),
      labels: { confirm: "Onayla", cancel: "Reddet" },
      confirmProps: { color: "red" },
      onConfirm: () => deleteUser(row.original.id),
    });

  const table = useMantineReactTable({
    columns,
    data: fetchedUsers,
    createDisplayMode: "modal", //default ('row', and 'custom' are also available)
    editDisplayMode: "modal", //default ('row', 'cell', 'table', and 'custom' are also available)
    enableEditing: true,
    getRowId: (row) => row.id,
    mantineToolbarAlertBannerProps: isLoadingUsersError
      ? {
          color: "red",
          children: "Error loading data",
        }
      : undefined,
    mantineTableContainerProps: {
      style: {
        minHeight: "500px",
      },
    },
    localization: {
      actions: "İşlemler",
      and: "ve",
      cancel: "İptal",
      changeFilterMode: "Filtre modunu değiştir",
      changeSearchMode: "Arama modunu değiştir",
      clearFilter: "Filtreyi temizle",
      clearSearch: "Aramayı temizle",
      clearSelection: "Seçimi temizle",
      clearSort: "Sıralamayı temizle",
      clickToCopy: "Kopyalamak için tıklayın",
      collapse: "Daralt",
      collapseAll: "Tümünü daralt",
      columnActions: "Sütun İşlemleri",
      copiedToClipboard: "Panoya kopyalandı",
      dropToGroupBy: "{column} ile gruplamak için sürükleyin",
      edit: "Düzenle",
      expand: "Genişlet",
      expandAll: "Tümünü genişlet",
      filterArrIncludes: "İçerenler",
      filterArrIncludesAll: "Tümünü içerenler",
      filterArrIncludesSome: "İçerenler",
      filterBetween: "Arasında",
      filterBetweenInclusive: "Dahil Arasında",
      filterByColumn: "{column} tarafından filtrele",
      filterContains: "İçeren",
      filterEmpty: "Boş",
      filterEndsWith: "İle biten",
      filterEquals: "Eşit",
      filterEqualsString: "Eşit",
      filterFuzzy: "Bulanık",
      filterGreaterThan: "Büyük",
      filterGreaterThanOrEqualTo: "Büyük veya Eşit",
      filterInNumberRange: "Arasında",
      filterIncludesString: "İçeren",
      filterIncludesStringSensitive: "İçeren",
      filterLessThan: "Küçük",
      filterLessThanOrEqualTo: "Küçük veya Eşit",
      filterMode: "Filtre Modu: {filterType}",
      filterNotEmpty: "Boş olmayan",
      filterNotEquals: "Eşit değil",
      filterStartsWith: "İle başlayan",
      filterWeakEquals: "Eşit",
      filteringByColumn: "{column} - {filterType} {filterValue} ile filtreleme",
      goToFirstPage: "İlk sayfaya git",
      goToLastPage: "Son sayfaya git",
      goToNextPage: "Sonraki sayfaya git",
      goToPreviousPage: "Önceki sayfaya git",
      grab: "Tut",
      groupByColumn: "{column} ile grupla",
      groupedBy: "Gruplanmış",
      hideAll: "Tümünü gizle",
      hideColumn: "{column} sütununu gizle",
      max: "Maks.",
      min: "Min.",
      move: "Taşı",
      noRecordsToDisplay: "Gösterilecek kayıt yok",
      noResultsFound: "Sonuç bulunamadı",
      of: "of",
      or: "veya",
      pin: "Sabitle",
      pinToLeft: "Sola sabitle",
      pinToRight: "Sağa sabitle",
      resetColumnSize: "Sütun boyutunu sıfırla",
      resetOrder: "Sıralamayı sıfırla",
      rowActions: "Satır İşlemleri",
      rowNumber: "#",
      rowNumbers: "Satır Numaraları",
      rowsPerPage: "Sayfa başına satır",
      save: "Kaydet",
      search: "Ara",
      selectedCountOfRowCountRowsSelected: "{selectedCount} seçilen {rowCount} satır",
      select: "Seç",
      showAll: "Tümünü göster",
      showAllColumns: "Tüm sütunları göster",
      showHideColumns: "Sütunları Göster/Gizle",
      showHideFilters: "Filtreleri Göster/Gizle",
      showHideSearch: "Aramayı Göster/Gizle",
      sortByColumnAsc: "{column} sütununa göre artan sırala",
      sortByColumnDesc: "{column} sütununa göre azalan sırala",
      sortedByColumnAsc: "{column} sütununa göre artan sıralandı",
      sortedByColumnDesc: "{column} sütununa göre azalan sıralandı",
      thenBy: ", sonra ",
      toggleDensity: "Yoğunluğu Değiştir",
      toggleFullScreen: "Tam ekrana geçiş",
      toggleSelectAll: "Tümünü seçmek için tıklayın",
      toggleSelectRow: "Satır seçmek için tıklayın",
      toggleVisibility: "Görünürlüğü değiştir",
      ungroupByColumn: "{column} ile gruplamayı kaldır",
      unpin: "Sabitlemeyi kaldır",
      unpinAll: "Tüm sabitlemeleri kaldır"
    }
    ,
    onCreatingRowCancel: () => setValidationErrors({}),
    onCreatingRowSave: handleCreateUser,
    onEditingRowCancel: () => setValidationErrors({}),
    onEditingRowSave: handleSaveUser,
    renderCreateRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Yeni Başvuru</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderEditRowModalContent: ({ table, row, internalEditComponents }) => (
      <Stack>
        <Title order={3}>Edit User</Title>
        {internalEditComponents}
        <Flex justify="flex-end" mt="xl">
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </Flex>
      </Stack>
    ),
    renderRowActions: ({ row, table }) => (
      <Flex gap="md">
        <Tooltip label="Edit">
          <ActionIcon onClick={() => table.setEditingRow(row)}>
            <IconEdit />
          </ActionIcon>
        </Tooltip>
        <Tooltip label="Delete">
          <ActionIcon color="red" onClick={() => openDeleteConfirmModal(row)}>
            <IconTrash />
          </ActionIcon>
        </Tooltip>
      </Flex>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Button
        onClick={() => {
          table.setCreatingRow(true); //simplest way to open the create row modal with no default values
          //or you can pass in a row object to set default values with the `createRow` helper function
          // table.setCreatingRow(
          //   createRow(table, {
          //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
          //   }),
          // );
        }}
      >
        Yeni Başvuru
      </Button>
    ),
    state: {
      isLoading: isLoadingUsers,
      isSaving: isCreatingUser || isUpdatingUser || isDeletingUser,
      showAlertBanner: isLoadingUsersError,
      showProgressBars: isFetchingUsers,
    },
  });

  return (
    <Paper shadow="xl" m={20} p={20}>
      {" "}
      <Title order={3} pb={30}>
            STS Başvurusu
          </Title>
      <>
      <Stepper active={active} pb={30}  size="sm" iconSize={20} pl={300} pr={300}>
        <Stepper.Step label="STS Başvuru"  />
        <Stepper.Step label="Niyet Mektubu" />
        <Stepper.Step label="Kapasite"  />
        <Stepper.Step label="Teminat"  />
        <Stepper.Step label="Prova Onay"  />
      </Stepper>


    </>
      <MantineReactTable
        table={table}
      
      />{" "}
    </Paper>
  );
};

//CREATE hook (post new user to api)
function useCreateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(
        ["users"],
        (prevUsers: any) =>
          [
            ...prevUsers,
            {
              ...newUserInfo,
              id: (Math.random() + 1).toString(36).substring(7),
            },
          ] as User[]
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//READ hook (get users from api)
function useGetUsers() {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      //send api request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve(fakeData);
    },
    refetchOnWindowFocus: false,
  });
}

//UPDATE hook (put user in api)
function useUpdateUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (user: User) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (newUserInfo: User) => {
      queryClient.setQueryData(["users"], (prevUsers: any) =>
        prevUsers?.map((prevUser: User) =>
          prevUser.id === newUserInfo.id ? newUserInfo : prevUser
        )
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

//DELETE hook (delete user in api)
function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: string) => {
      //send api update request here
      await new Promise((resolve) => setTimeout(resolve, 1000)); //fake api call
      return Promise.resolve();
    },
    //client side optimistic update
    onMutate: (userId: string) => {
      queryClient.setQueryData(["users"], (prevUsers: any) =>
        prevUsers?.filter((user: User) => user.id !== userId)
      );
    },
    // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
  });
}

const queryClient = new QueryClient();

const ExampleWithProviders = () => (
  //Put this with your other react-query providers near root of your app
  <QueryClientProvider client={queryClient}>
    <ModalsProvider>
      <Example />
    </ModalsProvider>
  </QueryClientProvider>
);

export default ExampleWithProviders;

const validateRequired = (value: string) => !!value.length;
const validateEmail = (email: string) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

function validateUser(user: User) {
  return {
    firstName: !validateRequired(user.firstName)
      ? "First Name is Required"
      : "",
    lastName: !validateRequired(user.lastName) ? "Last Name is Required" : "",
    email: !validateEmail(user.email) ? "Incorrect Email Format" : "",
  };
}
