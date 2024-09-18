window.SIDEBAR_ITEMS = {"constant":["AF_UNIX","ARCH_GET_FS","ARCH_GET_GS","ARCH_SET_FS","ARCH_SET_GS","AT_EMPTY_PATH","AT_HWCAP2","AT_MINSIGSTKSZ","AT_NULL","AT_PAGESZ","AT_SYSINFO_EHDR","BPF_ABS","BPF_ADD","BPF_ALU","BPF_AND","BPF_B","BPF_DIV","BPF_H","BPF_IMM","BPF_IND","BPF_JA","BPF_JEQ","BPF_JGE","BPF_JGT","BPF_JMP","BPF_JSET","BPF_K","BPF_LD","BPF_LDX","BPF_LEN","BPF_LSH","BPF_MEM","BPF_MISC","BPF_MOD","BPF_MSH","BPF_MUL","BPF_NEG","BPF_OR","BPF_RET","BPF_RSH","BPF_ST","BPF_STX","BPF_SUB","BPF_W","BPF_X","BPF_XOR","CLD_CONTINUED","CLD_DUMPED","CLD_EXITED","CLD_KILLED","CLD_STOPPED","CLD_TRAPPED","CLOCK_MONOTONIC_RAW","CLONE_CLEAR_SIGHAND","CLONE_NEWCGROUP","CLONE_NEWIPC","CLONE_NEWNET","CLONE_NEWNS","CLONE_NEWPID","CLONE_NEWUSER","CLONE_NEWUTS","CLONE_PIDFD","E2BIG","EACCES","EAGAIN","EBADF","EBUSY","ECHILD","EDOM","EEXIST","EFAULT","EFBIG","EINTR","EINVAL","EIO","EISDIR","EMFILE","EMLINK","ENFILE","ENODEV","ENOENT","ENOEXEC","ENOMEM","ENOSPC","ENOTBLK","ENOTDIR","ENOTTY","ENXIO","EOPNOTSUPP","EPERM","EPIPE","ERANGE","EROFS","ESPIPE","ESRCH","ETIMEDOUT","ETOOMANYREFS","ETXTBSY","EXDEV","FALLOC_FL_COLLAPSE_RANGE","FALLOC_FL_INSERT_RANGE","FALLOC_FL_KEEP_SIZE","FALLOC_FL_NO_HIDE_STALE","FALLOC_FL_PUNCH_HOLE","FALLOC_FL_UNSHARE_RANGE","FALLOC_FL_ZERO_RANGE","FUTEX2_SIZE_U32","FUTEX_BITSET_MATCH_ANY","FUTEX_WAIT","FUTEX_WAKE","F_ADD_SEALS","F_DUPFD","F_GETFD","F_SEAL_EXEC","F_SEAL_FUTURE_WRITE","F_SEAL_GROW","F_SEAL_SEAL","F_SEAL_SHRINK","F_SEAL_WRITE","F_SETFD","F_SETFL","F_SETOWN","F_SETSIG","HWCAP2_FSGSBASE","IORING_ACCEPT_MULTISHOT","IORING_ASYNC_CANCEL_ALL","IORING_ASYNC_CANCEL_ANY","IORING_ASYNC_CANCEL_FD","IORING_ASYNC_CANCEL_FD_FIXED","IORING_ASYNC_CANCEL_OP","IORING_ASYNC_CANCEL_USERDATA","IORING_CQE_BUFFER_SHIFT","IORING_CQE_F_BUFFER","IORING_CQE_F_MORE","IORING_CQE_F_NOTIF","IORING_CQE_F_SOCK_NONEMPTY","IORING_CQ_EVENTFD_DISABLED","IORING_ENTER_EXT_ARG","IORING_ENTER_GETEVENTS","IORING_ENTER_REGISTERED_RING","IORING_ENTER_SQ_WAIT","IORING_ENTER_SQ_WAKEUP","IORING_FEAT_CQE_SKIP","IORING_FEAT_CUR_PERSONALITY","IORING_FEAT_EXT_ARG","IORING_FEAT_FAST_POLL","IORING_FEAT_LINKED_FILE","IORING_FEAT_NATIVE_WORKERS","IORING_FEAT_NODROP","IORING_FEAT_POLL_32BITS","IORING_FEAT_REG_REG_RING","IORING_FEAT_RSRC_TAGS","IORING_FEAT_RW_CUR_POS","IORING_FEAT_SINGLE_MMAP","IORING_FEAT_SQPOLL_NONFIXED","IORING_FEAT_SUBMIT_STABLE","IORING_FILE_INDEX_ALLOC","IORING_FIXED_FD_NO_CLOEXEC","IORING_FSYNC_DATASYNC","IORING_LINK_TIMEOUT_UPDATE","IORING_MSG_DATA","IORING_MSG_RING_CQE_SKIP","IORING_MSG_RING_FLAGS_PASS","IORING_MSG_SEND_FD","IORING_NOTIF_USAGE_ZC_COPIED","IORING_OFF_CQ_RING","IORING_OFF_MMAP_MASK","IORING_OFF_PBUF_RING","IORING_OFF_PBUF_SHIFT","IORING_OFF_SQES","IORING_OFF_SQ_RING","IORING_POLL_ADD_LEVEL","IORING_POLL_ADD_MULTI","IORING_POLL_UPDATE_EVENTS","IORING_POLL_UPDATE_USER_DATA","IORING_RECVSEND_FIXED_BUF","IORING_RECVSEND_POLL_FIRST","IORING_RECV_MULTISHOT","IORING_REGISTER_BUFFERS","IORING_REGISTER_BUFFERS2","IORING_REGISTER_BUFFERS_UPDATE","IORING_REGISTER_ENABLE_RINGS","IORING_REGISTER_EVENTFD","IORING_REGISTER_EVENTFD_ASYNC","IORING_REGISTER_FILES","IORING_REGISTER_FILES2","IORING_REGISTER_FILES_SKIP","IORING_REGISTER_FILES_UPDATE","IORING_REGISTER_FILES_UPDATE2","IORING_REGISTER_FILE_ALLOC_RANGE","IORING_REGISTER_IOWQ_AFF","IORING_REGISTER_IOWQ_MAX_WORKERS","IORING_REGISTER_LAST","IORING_REGISTER_NAPI","IORING_REGISTER_PBUF_RING","IORING_REGISTER_PBUF_STATUS","IORING_REGISTER_PERSONALITY","IORING_REGISTER_PROBE","IORING_REGISTER_RESTRICTIONS","IORING_REGISTER_RING_FDS","IORING_REGISTER_SYNC_CANCEL","IORING_REGISTER_USE_REGISTERED_RING","IORING_RESTRICTION_LAST","IORING_RESTRICTION_REGISTER_OP","IORING_RESTRICTION_SQE_FLAGS_ALLOWED","IORING_RESTRICTION_SQE_FLAGS_REQUIRED","IORING_RESTRICTION_SQE_OP","IORING_RSRC_REGISTER_SPARSE","IORING_SEND_ZC_REPORT_USAGE","IORING_SETUP_ATTACH_WQ","IORING_SETUP_CLAMP","IORING_SETUP_COOP_TASKRUN","IORING_SETUP_CQE32","IORING_SETUP_CQSIZE","IORING_SETUP_DEFER_TASKRUN","IORING_SETUP_IOPOLL","IORING_SETUP_NO_MMAP","IORING_SETUP_NO_SQARRAY","IORING_SETUP_REGISTERED_FD_ONLY","IORING_SETUP_R_DISABLED","IORING_SETUP_SINGLE_ISSUER","IORING_SETUP_SQE128","IORING_SETUP_SQPOLL","IORING_SETUP_SQ_AFF","IORING_SETUP_SUBMIT_ALL","IORING_SETUP_TASKRUN_FLAG","IORING_SQ_CQ_OVERFLOW","IORING_SQ_NEED_WAKEUP","IORING_SQ_TASKRUN","IORING_TIMEOUT_ABS","IORING_TIMEOUT_BOOTTIME","IORING_TIMEOUT_CLOCK_MASK","IORING_TIMEOUT_ETIME_SUCCESS","IORING_TIMEOUT_MULTISHOT","IORING_TIMEOUT_REALTIME","IORING_TIMEOUT_UPDATE","IORING_TIMEOUT_UPDATE_MASK","IORING_UNREGISTER_BUFFERS","IORING_UNREGISTER_EVENTFD","IORING_UNREGISTER_FILES","IORING_UNREGISTER_IOWQ_AFF","IORING_UNREGISTER_NAPI","IORING_UNREGISTER_PBUF_RING","IORING_UNREGISTER_PERSONALITY","IORING_UNREGISTER_RING_FDS","IORING_URING_CMD_FIXED","IORING_URING_CMD_MASK","IOSQE_ASYNC_BIT","IOSQE_BUFFER_SELECT_BIT","IOSQE_CQE_SKIP_SUCCESS_BIT","IOSQE_FIXED_FILE_BIT","IOSQE_IO_DRAIN_BIT","IOSQE_IO_HARDLINK_BIT","IOSQE_IO_LINK_BIT","MADV_COLD","MADV_COLLAPSE","MADV_DODUMP","MADV_DOFORK","MADV_DONTDUMP","MADV_DONTFORK","MADV_DONTNEED","MADV_DONTNEED_LOCKED","MADV_FREE","MADV_HUGEPAGE","MADV_HWPOISON","MADV_KEEPONFORK","MADV_MERGEABLE","MADV_NOHUGEPAGE","MADV_NORMAL","MADV_PAGEOUT","MADV_POPULATE_READ","MADV_POPULATE_WRITE","MADV_RANDOM","MADV_REMOVE","MADV_SEQUENTIAL","MADV_SOFT_OFFLINE","MADV_UNMERGEABLE","MADV_WILLNEED","MADV_WIPEONFORK","MAP_ANONYMOUS","MAP_FIXED","MAP_POPULATE","MAP_PRIVATE","MAP_SHARED","MFD_ALLOW_SEALING","MFD_CLOEXEC","MINSIGSTKSZ","MNT_DETACH","MNT_EXPIRE","MNT_FORCE","MREMAP_FIXED","MREMAP_MAYMOVE","MSG_NOSIGNAL","MS_BIND","MS_NODEV","MS_NOEXEC","MS_NOSUID","MS_PRIVATE","MS_RDONLY","MS_REC","O_ASYNC","O_CLOEXEC","O_DIRECTORY","O_NONBLOCK","O_PATH","O_RDONLY","O_RDWR","O_WRONLY","PROT_EXEC","PROT_READ","PROT_WRITE","P_ALL","P_PGID","P_PID","P_PIDFD","RLIMIT_DATA","RLIMIT_FSIZE","RLIMIT_LOCKS","RLIMIT_MEMLOCK","RLIMIT_MSGQUEUE","RLIMIT_NOFILE","RLIMIT_NPROC","RLIMIT_STACK","SA_NODEFER","SA_ONSTACK","SA_RESTORER","SA_SIGINFO","SCM_RIGHTS","SECBIT_KEEP_CAPS","SECBIT_KEEP_CAPS_LOCKED","SECBIT_NOROOT","SECBIT_NOROOT_LOCKED","SECBIT_NO_CAP_AMBIENT_RAISE","SECBIT_NO_CAP_AMBIENT_RAISE_LOCKED","SECBIT_NO_SETUID_FIXUP","SECBIT_NO_SETUID_FIXUP_LOCKED","SECCOMP_RET_ALLOW","SECCOMP_RET_KILL_THREAD","SECCOMP_SET_MODE_FILTER","SEEK_CUR","SEEK_END","SEEK_SET","SIGABRT","SIGBUS","SIGCHLD","SIGCONT","SIGFPE","SIGHUP","SIGILL","SIGINT","SIGIO","SIGKILL","SIGPIPE","SIGSEGV","SIGSTOP","SIGSYS","SIGTERM","SIGTRAP","SIG_BLOCK","SIG_DFL","SIG_IGN","SIG_SETMASK","SIG_UNBLOCK","SOCK_CLOEXEC","SOCK_SEQPACKET","SOCK_STREAM","SOL_SOCKET","STDERR_FILENO","STDIN_FILENO","STDOUT_FILENO","SYS_arch_prctl","SYS_capset","SYS_chdir","SYS_clock_gettime","SYS_clone","SYS_clone3","SYS_close","SYS_close_range","SYS_dup3","SYS_execveat","SYS_exit","SYS_fallocate","SYS_fchdir","SYS_fcntl","SYS_ftruncate","SYS_futex","SYS_getdents64","SYS_getgid","SYS_getpid","SYS_getuid","SYS_io_uring_enter","SYS_io_uring_register","SYS_io_uring_setup","SYS_ioctl","SYS_kill","SYS_lseek","SYS_madvise","SYS_memfd_create","SYS_mmap","SYS_mount","SYS_mprotect","SYS_mremap","SYS_munmap","SYS_open","SYS_openat","SYS_pidfd_send_signal","SYS_pipe2","SYS_pivot_root","SYS_prctl","SYS_process_vm_readv","SYS_process_vm_writev","SYS_ptrace","SYS_read","SYS_recvmsg","SYS_rt_sigaction","SYS_rt_sigprocmask","SYS_rt_sigreturn","SYS_sched_yield","SYS_seccomp","SYS_sendmsg","SYS_set_tid_address","SYS_setdomainname","SYS_sethostname","SYS_setrlimit","SYS_sigaltstack","SYS_socketpair","SYS_umount2","SYS_uname","SYS_unshare","SYS_userfaultfd","SYS_waitid","SYS_write","SYS_writev","UFFDIO_CONTINUE_MODE_DONTWAKE","UFFDIO_CONTINUE_MODE_WP","UFFDIO_COPY_MODE_DONTWAKE","UFFDIO_COPY_MODE_WP","UFFDIO_REGISTER_MODE_MINOR","UFFDIO_REGISTER_MODE_MISSING","UFFDIO_REGISTER_MODE_WP","UFFDIO_WRITEPROTECT_MODE_DONTWAKE","UFFDIO_WRITEPROTECT_MODE_WP","UFFDIO_ZEROPAGE_MODE_DONTWAKE","UFFD_API","UFFD_EVENT_FORK","UFFD_EVENT_PAGEFAULT","UFFD_EVENT_REMAP","UFFD_EVENT_REMOVE","UFFD_EVENT_UNMAP","UFFD_FEATURE_EVENT_FORK","UFFD_FEATURE_EVENT_REMAP","UFFD_FEATURE_EVENT_REMOVE","UFFD_FEATURE_EVENT_UNMAP","UFFD_FEATURE_EXACT_ADDRESS","UFFD_FEATURE_MINOR_HUGETLBFS","UFFD_FEATURE_MINOR_SHMEM","UFFD_FEATURE_MISSING_HUGETLBFS","UFFD_FEATURE_MISSING_SHMEM","UFFD_FEATURE_MOVE","UFFD_FEATURE_PAGEFAULT_FLAG_WP","UFFD_FEATURE_POISON","UFFD_FEATURE_SIGBUS","UFFD_FEATURE_THREAD_ID","UFFD_FEATURE_WP_ASYNC","UFFD_FEATURE_WP_HUGETLBFS_SHMEM","UFFD_FEATURE_WP_UNPOPULATED","UFFD_PAGEFAULT_FLAG_MINOR","UFFD_PAGEFAULT_FLAG_WP","UFFD_PAGEFAULT_FLAG_WRITE","UFFD_USER_MODE_ONLY","WEXITED","WNOHANG","_LINUX_CAPABILITY_VERSION_3","__WALL","io_uring_op_IORING_OP_ACCEPT","io_uring_op_IORING_OP_ASYNC_CANCEL","io_uring_op_IORING_OP_CLOSE","io_uring_op_IORING_OP_CONNECT","io_uring_op_IORING_OP_EPOLL_CTL","io_uring_op_IORING_OP_FADVISE","io_uring_op_IORING_OP_FALLOCATE","io_uring_op_IORING_OP_FGETXATTR","io_uring_op_IORING_OP_FILES_UPDATE","io_uring_op_IORING_OP_FIXED_FD_INSTALL","io_uring_op_IORING_OP_FSETXATTR","io_uring_op_IORING_OP_FSYNC","io_uring_op_IORING_OP_FTRUNCATE","io_uring_op_IORING_OP_FUTEX_WAIT","io_uring_op_IORING_OP_FUTEX_WAITV","io_uring_op_IORING_OP_FUTEX_WAKE","io_uring_op_IORING_OP_GETXATTR","io_uring_op_IORING_OP_LAST","io_uring_op_IORING_OP_LINKAT","io_uring_op_IORING_OP_LINK_TIMEOUT","io_uring_op_IORING_OP_MADVISE","io_uring_op_IORING_OP_MKDIRAT","io_uring_op_IORING_OP_MSG_RING","io_uring_op_IORING_OP_NOP","io_uring_op_IORING_OP_OPENAT","io_uring_op_IORING_OP_OPENAT2","io_uring_op_IORING_OP_POLL_ADD","io_uring_op_IORING_OP_POLL_REMOVE","io_uring_op_IORING_OP_PROVIDE_BUFFERS","io_uring_op_IORING_OP_READ","io_uring_op_IORING_OP_READV","io_uring_op_IORING_OP_READ_FIXED","io_uring_op_IORING_OP_READ_MULTISHOT","io_uring_op_IORING_OP_RECV","io_uring_op_IORING_OP_RECVMSG","io_uring_op_IORING_OP_REMOVE_BUFFERS","io_uring_op_IORING_OP_RENAMEAT","io_uring_op_IORING_OP_SEND","io_uring_op_IORING_OP_SENDMSG","io_uring_op_IORING_OP_SENDMSG_ZC","io_uring_op_IORING_OP_SEND_ZC","io_uring_op_IORING_OP_SETXATTR","io_uring_op_IORING_OP_SHUTDOWN","io_uring_op_IORING_OP_SOCKET","io_uring_op_IORING_OP_SPLICE","io_uring_op_IORING_OP_STATX","io_uring_op_IORING_OP_SYMLINKAT","io_uring_op_IORING_OP_SYNC_FILE_RANGE","io_uring_op_IORING_OP_TEE","io_uring_op_IORING_OP_TIMEOUT","io_uring_op_IORING_OP_TIMEOUT_REMOVE","io_uring_op_IORING_OP_UNLINKAT","io_uring_op_IORING_OP_URING_CMD","io_uring_op_IORING_OP_WAITID","io_uring_op_IORING_OP_WRITE","io_uring_op_IORING_OP_WRITEV","io_uring_op_IORING_OP_WRITE_FIXED"],"enum":["c_void"],"fn":["CMSG_DATA","CMSG_FIRSTHDR","CMSG_LEN","CMSG_SPACE","WEXITSTATUS","WIFEXITED","WIFSIGNALED","WTERMSIG","abort","readdir","recvfd","sendfd","sys_arch_prctl_set_gs","sys_capset","sys_capset_drop_all","sys_chdir","sys_clock_gettime","sys_close_range","sys_dup3","sys_execveat","sys_exit","sys_fallocate","sys_fchdir","sys_fcntl","sys_fcntl_dupfd","sys_ftruncate","sys_futex_wait","sys_futex_wake_one","sys_getgid","sys_getpid","sys_getuid","sys_io_uring_enter","sys_io_uring_register","sys_io_uring_setup","sys_ioctl","sys_kill","sys_lseek","sys_madvise","sys_memfd_create","sys_mmap","sys_mount","sys_mprotect","sys_mremap","sys_munmap","sys_open","sys_openat","sys_pipe2","sys_pivot_root","sys_prctl_cap_ambient_clear_all","sys_prctl_get_dumpable","sys_prctl_set_dumpable","sys_prctl_set_name","sys_prctl_set_no_new_privs","sys_prctl_set_securebits","sys_process_vm_readv","sys_process_vm_writev","sys_ptrace_attach","sys_ptrace_continue","sys_ptrace_detach","sys_ptrace_getregs","sys_ptrace_interrupt","sys_ptrace_seize","sys_ptrace_setregs","sys_ptrace_traceme","sys_read","sys_read_raw","sys_recvmsg","sys_rt_sigaction","sys_rt_sigprocmask","sys_sched_yield","sys_seccomp_set_mode_filter","sys_sendmsg","sys_set_tid_address","sys_setdomainname","sys_sethostname","sys_setrlimit","sys_sigaltstack","sys_socketpair","sys_uffdio_api","sys_uffdio_continue","sys_uffdio_copy","sys_uffdio_move","sys_uffdio_poison","sys_uffdio_register","sys_uffdio_unregister","sys_uffdio_wake","sys_uffdio_writeprotect","sys_uffdio_zeropage","sys_umount2","sys_uname","sys_unshare","sys_userfaultfd","sys_waitid","sys_write","sys_writev","vm_read_memory","vm_write_memory","writev"],"macro":["bpf","cstr","syscall","syscall_readonly"],"struct":["Dirent64","Dirent64Iter","Error","Fd","FdRef","IoUring","Mmap","__user_cap_data_struct","__user_cap_header_struct","cmsghdr","fpstate","fpx_sw_bytes","io_cqring_offsets","io_sqring_offsets","io_uring_buf","io_uring_buf_reg","io_uring_buf_ring","io_uring_buf_status","io_uring_cqe","io_uring_file_index_range","io_uring_files_update","io_uring_getevents_arg","io_uring_napi","io_uring_params","io_uring_probe","io_uring_probe_op","io_uring_recvmsg_out","io_uring_restriction","io_uring_rsrc_register","io_uring_rsrc_update","io_uring_rsrc_update2","io_uring_sqe","io_uring_sync_cancel_reg","iovec","kernel_sigaction","linux_dirent64","msghdr","new_utsname","rlimit","rusage","sigcontext","sock_filter","stack_t","timespec","ucontext","uffd_msg","uffdio_api","uffdio_continue","uffdio_copy","uffdio_move","uffdio_poison","uffdio_range","uffdio_register","uffdio_writeprotect","uffdio_zeropage","user_regs_struct"],"type":["c_int","c_long","c_uchar","c_uint","c_ulong","c_ushort","gid_t","kernel_sigset_t","pid_t","siginfo_t","size_t","socklen_t","uid_t"]};